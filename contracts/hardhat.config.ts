import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
require("dotenv").config();
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
const INFURA_KEY = process.env.INFURA_KEY as string;


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts",
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${ETHEREUM_PRIVATE_KEY}`],
    },
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
    outDir: "../web/src/types",
    target: "ethers-v5",
  },
};

export default config;