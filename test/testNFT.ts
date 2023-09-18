import { expect } from "chai";
import { ethers } from "hardhat";
import { PolygonNFT } from '../typechain-types'

let nftContract: PolygonNFT;
let user1,user2,user3,user4

describe('PolygonNFT', function(){
   before(async()=>{
        const contractNFT = await ethers.getContractFactory('PolygonNFT');
        nftContract = await contractNFT.deploy('PolyNFT', 'PNT')
       await nftContract.deployed();
        [user1, user2, user3, user4] = await ethers.getSigners()
    })
  it('Mint NFT to user2', async()=>{
    // console.log(`NFT address: ${nftContract.address}`)
    // console.log(`user1: ${user1.address}, user2: ${user2.address}, user3: ${user3.address}`)
    expect(await nftContract.balanceOf(user2.address)).to.equal(0)
    await nftContract.mintNft(user2.address, 'https://juju-token')
    expect(await nftContract.balanceOf(user2.address)).to.equal(1)
 
})
it('should approve user3 of user2 NFT', async()=>{
    await nftContract.mintNft(user2.address, 'https://juju-token')
    expect(await nftContract.getApproved(0)).to.equal('0x0000000000000000000000000000000000000000')
    await nftContract.connect(user2).approve(user3.address, 0)
    expect(await nftContract.getApproved(0)).to.equal(user3.address)
})

it("should transfer user2's NFT to user4 by user3",async() => {
    expect(await nftContract.balanceOf(user4.address)).to.equal(0)
    await nftContract.connect(user3).transferFrom(user2.address, user4.address, 0)
    expect(await nftContract.balanceOf(user4.address)).to.equal(1)
})
})