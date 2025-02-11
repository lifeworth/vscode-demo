import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Gas', function () {
    it('test gas', async function () {
        const Gas = await ethers.getContractFactory('GasTest');
        const gas = await Gas.deploy();
        await gas.waitForDeployment();

        for (let i = 0; i < 10; i++) {
           await gas.test1();
           await gas.test2();
           await gas.test3();
           await gas.test4();
           await gas.test5();
        }
    });
});