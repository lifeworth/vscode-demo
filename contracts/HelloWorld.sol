// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;
import "hardhat/console.sol";

contract HelloWorld {
    event called(string message);

    function hello() public returns (string memory) {
        emit called("dudu called");
        console.log(msg.sender);
        return "dudu1";
    }
}
