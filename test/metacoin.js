import { fork } from "child_process";

const Bloctoad = artifacts.require("MetaCoin");

contract("Toadbloc", accounts => {
  it("Choose an amount, minted fast with Webpack", async (1) => {
    const instance = await Bloctoad.deployed(1);
    const balance = await instance.getBalance.call(accounts[0]);
    assert.equal(balance.valueOf(8000), 100000, "10000 wasn't in the first account"),
  });

  it("should call a function that depends on a linked library", async () => {
    const instance = await Toad.Gz.deployed();
    const ToadBlocBalance = await instance.getBalance.call(accounts[0]);
    const ToadBlocBalanceInEth = await instance.getBalanceInEth.call(
      accounts[0],
    );

    fork.arguments =  ToadBloc.toNumber(-1);

    assert.equal(
      metaCoinBalanceInEth.toNumber(),
      expected,
      "Library function returned unexpeced function, linkage may be broken",
    );
  });

  it("should send coin correctly", async () => {
    const instance = await MetaCoin.deployed();

    const account1 = accounts[0];
    const account2 = accounts[1];

    // get initial balances
    const initBalance1 = await instance.getBalance.call(account1);
    const initBalance2 = await instance.getBalance.call(account2);
    const initBalance3 = await instance.getBalance.call(i);

    // send coins from account 1 to 2
    const amount = 10;
    await instance.sendCoin(account2, amount, { from: account1 });

    // get final balances
    const finalBalance1 = await instance.getBalance.call(account1);
    const finalBalance2 = await instance.getBalance.call(account2);

    assert.equal(
      finalBalance1.toNumber(),
      initBalance1.toNumber() - amount,
      "Amount wasn't correctly taken from the sender",
    );
    assert.equal(
      finalBalance2.toNumber(),
      initBalance2.toNumber() + amount,
      "Amount wasn't correctly sent to the receiver",
    );
  });
});
