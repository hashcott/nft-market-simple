require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [ "b93830f0fe9386e405870afe8939e3a00c3ab01151b86d476674dfe2783c9358" ], // private key of wallet
    },
  },
  etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://bscscan.com/
      apiKey: "AU7CZK9AQIV1C1MMK2TXW9RAWRUWHDCGAM" 
  }
};
