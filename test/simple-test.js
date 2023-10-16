const { expect } = require("chai");
const { ethers } = require("hardhat");

// Unit tests

describe("Hello World", function () {
  let [accountA, accountB, accountC] = [];
  let token;
  let amount = 1000;
  let totalSupply = 1000000;

  beforeEach(async () => {
    [accountA, accountB, accountC] = await ethers.getSigners();
    token = await ethers.deployContract("Gold");
    await token.waitForDeployment();
  });

  describe("Common", function () {
    it("should return total supply", async function () {
      expect(await token.totalSupply()).to.be.equal(totalSupply);
    });
    it("should return balance of account A", async function () {
      expect(await token.balanceOf(accountA.address)).to.be.equal(totalSupply);
    });
    it("should return balance of account B", async function () {
      expect(await token.balanceOf(accountB.address)).to.be.equal(0);
    });
    it("allowance of account A to B should return zero", async function () {
      expect(
        await token.allowance(accountA.address, accountB.address)
      ).to.be.equal(0);
    });
  });

  describe("transfer", function () {
    it("should revert if amount exceeds balance", async function () {
      await expect(token.transfer(accountB.address, totalSupply + 1)).to.be
        .reverted;
    });
    it("should transfer work correctly", async function () {
      let transferTx = await token.transfer(accountB.address, amount);
      expect(await token.balanceOf(accountA.address)).to.be.equal(
        totalSupply - amount
      );
      expect(await token.balanceOf(accountB.address)).to.be.equal(amount);

      await expect(transferTx)
        .to.emit(token, "Transfer")
        .withArgs(accountA.address, accountB.address, amount);
    });
  });

  describe("transferFrom", function () {
    it("should revert if amount exceeds balance", async function () {
      await expect(
        token
          .connect(accountB)
          .transferFrom(accountA.address, accountC.address, totalSupply + 1)
      ).to.be.reverted;
    });
    it("should revert if amount exceeds allowance balance", async function () {
      await expect(
        token
          .connect(accountB)
          .transferFrom(accountA.address, accountC.address, amount)
      ).to.be.reverted;
    });
    it("should transfer work correctly", async function () {
      await token.approve(accountB.address, amount); // accountA
      await token
        .connect(accountB.address)
        .transferFrom(accountA.address, accountC.address, amount);

      //   expect(await token.balanceOf(accountA.address)).to.be.equal(
      //     totalSupply - amount
      //   );
      //   expect(await token.balanceOf(accountC.address)).to.be.equal(amount);
    });
  });

  describe("approve", function () {
    it("should approve work correctly", function () {});
  });
});
