require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { PRIVATE_KEY, CANTO_API_KEY } = process.env;
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {},
   cantoTestnet:{
      url: "https://canto-testnet.plexnode.wtf",
      accounts: [PRIVATE_KEY],
   }
  },
  etherscan: {
    apiKey:{
      cantoTestnet : CANTO_API_KEY,
    
    },
    customChains: [
      {
        network: "baseTestnet",
        chainId: 84532,
        urls: {
          apiURL: "https://basescan.org/apis",
          browserURL: "https://sepolia-explorer.base.org",
        },
      },
      {
        network: "cantoTestnet",
        chainId: 7701,
        urls: {
          apiURL: "https://testnet.tuber.build/eth-rpc-api-docs",
          browserURL: "https://testnet.tuber.build/",
        },
      },
    ]
  },
  solidity: {
    version: "0.8.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
