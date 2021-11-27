import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
require("dotenv").config();

// import { resolve } from "path";

// import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";



import { Signer } from "@ethersproject/abstract-signer";
import { task } from "hardhat/config";

task("accounts", "Prints the list of accounts", async (_taskArgs, hre) => {
  const accounts: Signer[] = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

const ETHEREUM_PRIVATE_KEY = process.env.ETHEREUM_PRIVATE_KEY as string;
// dotenvConfig({ path: resolve(__dirname, "./.env") });

// const chainIds = {
//   goerli: 5,
//   hardhat: 31337,
//   kovan: 42,
//   mainnet: 1,
//   rinkeby: 4,
//   ropsten: 3,
// };

// Ensure that we have all the environment variables we need.
// const mnemonic: string | undefined = process.env.MNEMONIC;
// if (!mnemonic) {
//   throw new Error("Please set your MNEMONIC in a .env file");
// }

// const infuraApiKey: string | undefined = process.env.INFURA_API_KEY;
// if (!infuraApiKey) {
//   throw new Error("Please set your INFURA_API_KEY in a .env file");
// }

// function getChainConfig(network: keyof typeof chainIds): NetworkUserConfig {
//   const url: string = "https://" + network + ".infura.io/v3/" + infuraApiKey;
//   return {
//     accounts: {
//       count: 10,
//       mnemonic,
//       path: "m/44'/60'/0'/0",
//     },
//     chainId: chainIds[network],
//     url,
//   };
// }

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts",
  },
  // networks: {
  //   hardhat: {
  //     accounts: {
  //       mnemonic,
  //     },
  //     chainId: chainIds.hardhat,
  //   },
  //   goerli: getChainConfig("goerli"),
  //   kovan: getChainConfig("kovan"),
  //   rinkeby: getChainConfig("rinkeby"),
  //   ropsten: getChainConfig("ropsten"),
  // },
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [`0x${ETHEREUM_PRIVATE_KEY}`],
    }
  },

  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    compilers:[
      {version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 800,
        },
      }},
    ],
    overrides:{
      "contracts/WETH.sol":{
        version: "0.4.26",
        settings:{
          optimizer: {
            enabled: true,
            runs: 800,
          },
        }
      }
    }
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
};

export default config;