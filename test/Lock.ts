import "@nomicfoundation/hardhat-ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloWorld", function() {
  it("should say hello",async function(){
    //1 setup
    //2 import contract
    //3 test action 
    const HW = await ethers.getContractFactory("HelloWorld");
    const hw = await HW.deploy();
    await hw.waitForDeployment();

    expect(await hw.hello()).to.equal("Hello World");


  });
});