const { ethers } = require("hardhat");

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld") // get info 
  const helloWorld = await HelloWorld.deploy("First") // deploy network
  await helloWorld.waitForDeployment() // wait for success tx
  console.log("Hello Word deployed to:",await helloWorld.getAddress()) // log address of deployed contract
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
