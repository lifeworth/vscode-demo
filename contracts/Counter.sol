// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
    event countChanged(address sender, uint256 count);

    uint256 public count;

    function increment() public {
        count += 1;
        emit countChanged(msg.sender, count);
    }

    function decrement() public {
        count -= 1;
        emit countChanged(msg.sender, count);
    }
}
