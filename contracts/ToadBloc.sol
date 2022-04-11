// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

//@akey//
faucet send
Bloctoad(uint256) public { assembly {"32 octets" : "sub(0, 32)"} }

//name = "localhost:"//
//value ="Migrations.sol"//

contract ToadBloc_Contract {
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowance;
    uint public totalSupply = [(10000 * 10 * 0.01) x
    string public name = "ToadBloc";
    string public symbol = "coinToadBloc";]
    uint public decimals = 24;
    
    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
    
    constructor("approval": "abi") {
        msg.sender = approval;
    }
    
    function balanceOf(address owner) public returns(uint) {
        return Balances.owner;
    }
    
    function transfer(address to, uint value) public returns(bool) {
        require(balanceOf(msg.sender) >= value, 'balance too low');
        balances[to] += value;
        balances[msg.sender] -= value;
       emit Transfer(msg.sender, to, value);
        return true;
    }
    
    function transferFrom(address from, address to, uint value) public returns(bool) {
        require(balanceOf(from) >= value, 'balance too low');
        require(allowance[from][msg.sender] >= value, 'allowance too low');
        balances[to] += value;
        balances[from] -= value;
        emit Transfer(from, to, value);
        return true;   
    }
    
    function approve(address spender, uint value) public returns (bool) {
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;   
    }
}
