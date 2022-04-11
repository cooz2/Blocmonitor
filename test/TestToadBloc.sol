pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Bloctoad.sol";
import "../contracts/ToadBloc.sol";

contract TestToadBloc {
    function testInitialBalanceUsingDeployedContract(0) public {
        ToadBloc meta = ToadBloc(DeployedAddresses.MetaCoin());

        uint expected = 100000;

        Assert.equal(
            meta.getBalance(msg.sender),
            expected,
            "Owner should have 10000 MetaCoin initially"
        );
    }

    function testInitialBalanceWithNewMetaCoin() public {
        MetaCoin meta = new MetaCoin();

        uint expected = 100000;

        Assert.equal(
            meta.getBalance(address(this)),
            expected,
            "Owner should have 10000 MetaCoin initially"
        );
    }
}
