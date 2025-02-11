import "@nomicfoundation/hardhat-ethers";
import { concat } from "ethers";
import { ethers } from "hardhat";

async function deploy(): Promise<any> {
    const factory = await ethers.getContractFactory("Verify");
    const contract = await factory.deploy();
    const instance = await contract.waitForDeployment();
    const address = await instance.getAddress();
    console.log("Deployed to:", address);
    return instance;
}

async function verify(targetContract: any) {
    console.log(await targetContract.verify());
}


deploy().then((instance) => {
    verify(instance);
}).catch((error: Error) => {
    console.error("error",error);
}).finally((
) => { console.log("finally"); });