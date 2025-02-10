import "@nomicfoundation/hardhat-ethers";
import { concat } from "ethers";
import { ethers } from "hardhat";

async function deploy(): Promise<any> {
    const factory = await ethers.getContractFactory("Counter");
    const contract = await factory.deploy();
    const instance = await contract.waitForDeployment();
    const address = await instance.getAddress();
    console.log("Deployed to:", address);
    return instance;
}

async function increment(targetContract: any) {
    console.log(await targetContract.increment());
}


deploy().then((instance) => {
    increment(instance);
}).catch((error: Error) => {
    console.error("error",error);
}).finally((
) => { console.log("finally"); });