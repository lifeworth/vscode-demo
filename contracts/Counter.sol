// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "hardhat/console.sol";

contract Counter {
    uint256 public counter;

    event CounterInc(uint counter);

    function count() public {
        counter++;
        console.log("count is now: ", counter);
        emit CounterInc(counter);
    }

    function getCount() public view returns (uint256) {
        return counter;
    }
}
