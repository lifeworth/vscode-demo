import "@nomicfoundation/hardhat-ethers";
import { ethers } from "hardhat";



async function deploy(): Promise<any> {
  const counterContract = await ethers.getContractFactory("Counter");
  const deploy = await counterContract.deploy();
  const deployment = await deploy.waitForDeployment();
  return deployment;
}

async function count(contract: any) {
  console.log(await contract.count());
}

async function getCount(contract: any) {
  console.log("getCounter is : ", await contract.getCount());
}

deploy().then(count);
deploy().then(getCount);