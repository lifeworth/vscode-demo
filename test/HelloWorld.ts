import { expect } from "chai";
import {ethers} from "hardhat";

describe("sya Hello", function () {
  it("should return the right string", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();
    await helloWorld.waitForDeployment();;
    expect(await helloWorld.hello()).to.equal("dudu");
  });

});
