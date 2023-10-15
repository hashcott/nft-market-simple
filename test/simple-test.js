const { expect } = require("chai");
const { ethers } = require("hardhat");

// Unit tests

describe("Hello World", function () {
    const message = "Hello word";
    const updateMessage = "UpdateNhe";
    it("Should return message correctly",async function () {
        // call contract
        const HelloWorld = await ethers.getContractFactory("HelloWorld")
        const helloWorld = await HelloWorld.deploy(message)
        await helloWorld.waitForDeployment()
        expect(await helloWorld.prinerHelloWorld()).to.be.equal(message)
        await helloWorld.updateMessage(updateMessage)
        expect(await helloWorld.prinerHelloWorld()).to.be.equal(updateMessage)

    })
})