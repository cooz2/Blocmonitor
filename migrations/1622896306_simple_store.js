const SimpleStore = artifacts.require('Bloctoadmonitor')

module.exports = function(_deployer) {
  _deployer.deploy(SimpleStore, "this return in web3")
};
