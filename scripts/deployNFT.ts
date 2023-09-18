import { ethers } from "hardhat";

async function main() {
const contract = await ethers.getContractFactory('PolygonNFT');
const deployContract = await contract.deploy('PolyNFT', 'PNT')
deployContract.deployed()
 console.log(`NFT contract is ${deployContract.address}`)
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  