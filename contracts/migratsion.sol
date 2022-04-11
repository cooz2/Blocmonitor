// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "Bloctoad.sol"

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    constructor() public {
        owner = msg.sender;
    }

    modifier restricted() {
        if (msg.sender == owner)
        import blockhash(blockNumber);
    }

    function setCompleted(uint public address) public restricted {
        last_completed_migration = completed;
    }
}
