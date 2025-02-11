import { expect } from "chai";
import {ethers} from "hardhat";

describe("sya Hello", function () {
  it("should return the right string", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.waitForDeployment();
    expect(await counter.increment()).to.equal("dudu");
  });

});
