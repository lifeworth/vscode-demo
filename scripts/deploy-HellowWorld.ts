import "@nomicfoundation/hardhat-ethers";
import { concat } from "ethers";
import { ethers } from "hardhat";

async function deploy(): Promise<any> {
    const factory = await ethers.getContractFactory("HelloWorld");
    const contract = await factory.deploy();
    const instance = await contract.waitForDeployment();
    return instance;
}

async function hello(helloContract: any) {
    console.log(await helloContract.hello());
}


deploy().then((instance) => {
    hello(instance);
}).catch((error: Error) => {
    console.log(error);
}).finally((
) => { console.log("finally"); });