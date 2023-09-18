import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
  polygon: {
    url: process.env.POLYGON_URL,
    accounts: [ process.env.PRIVATE_KEY ]
  }
}
};

export default config;
