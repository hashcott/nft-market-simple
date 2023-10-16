const { expect } = require("chai");
const { ethers } = require("hardhat");

// Unit tests

describe("Pepe contract", function () {
  let [accountA, accountB, accountC] = [];
  let pepe;
  let address0 = "0x0000000000000000000000000000000000000000";
  let uri = "sampleuri.com/";

  beforeEach(async () => {
    [accountA, accountB, accountC] = await ethers.getSigners();
    const Pepe = await ethers.getContractFactory("Pepe");
    pepe = await Pepe.deploy();
    await pepe.waitForDeployment();
  });

  describe("mint", function () {
    it("should revert if mint to zero address", async function () {
      await expect(pepe.mint(address0)).to.be.revertedWith(
        "ERC721: mint to the zero address"
      );
    });
    it("should mint token correctly", async function () {
      const mintTx = await pepe.mint(accountA.address);
      await expect(mintTx)
        .to.be.emit(pepe, "Transfer")
        .withArgs(address0, accountA.address, 1);
      expect(await pepe.balanceOf(accountA.address)).to.be.equal(1);
      expect(await pepe.ownerOf(1)).to.be.equal(accountA.address);
    });
  });
  describe("baseURI", function () {
    it("should update base URI", async function () {
      await pepe.mint(accountA.address);
      await pepe.updateBaseTokenURI(uri);
      expect(await pepe.tokenURI(1)).to.be.equal(uri + "1");
    });
  });
});
