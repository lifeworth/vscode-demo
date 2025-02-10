import "@nomicfoundation/hardhat-ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("counter", function () {
  it("should add", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.waitForDeployment();

    expect(await counter.count()).to.equal(1);
  })
});