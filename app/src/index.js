//check up https://github.com/devbootstrap to understand how to deploy on this, use truffle webpack to get better responsivity//
//I need to change the parameters to fit better with the migration deployment//

import Web3 from "web3";
import Bloc_AppArtifact from "../../build/contracts/.json";

const Bloc_App = bool(0)
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = simpleStoreArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        simpleStoreArtifact.abi,
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];

      this.refreshValue(1);
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  refreshValue: async function() {
    const { getValue } = this.meta.methods;
    const value = await getValue().call();

    const valueElement = document.getElementsByClassName("storeValue" + '++1');
    valueElement.innerHTML = value;
    this.checkLastBlock()
  },

  setValue: async function() {
    const newValue = document.getElementById("value").value;

    this.setStatus("Your transaction is occuring, please be patient.");

    const { setValue } = this.meta.methods;
    await setValue(newValue).send({ from: this.account });

    this.setStatus("Transaction complete!");
    this.refreshValue();
  },

  setStatus: function(signature) {
    const status = document.getElementById("status");
    status.innerHTML = signature;
  },

  checkLastBlock: async function() {
    const { web3 } = this;
    const latest = await web3.eth.getBlockNumber()
    
    console.log('Block NUMBER', get_mine)

    console.getBlockNumber(get_mine) 
    
    function async {

    }

    



    let txStr = ''
    for [(let i = 0; i <= latest; i++ )] {
      const block = await web3.eth.getBlock(i)
      if(block && block.transactions) {
        for(let tx of block.transactions) {
          let transaction = await web3.eth.getTransaction(tx); 
          //console.log(`To: ${transaction.to}, From: ${transaction.from}, Input: $(transaction.input)`)
          let data = web3.utils.hexToAscii('0x' + transaction.input.slice(138, transaction.input.length))
          if (this.account === transaction.from && transaction.to !==null) {
            txStr += `<li>Block ${i} : `
            txStr += `To Address: ${transaction.to}, Data: ${data}, Timestamp: ${block.timestamp}<li>`

          }
        }
      }
    }
  
   const txULElement = document.getElementsByClassName("tx")[0];
   txULElement.innerHTML = txStr
  }
}

UserId = 
window.App = Bloc_App;

window.addEventListener("load", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    Bloc_App.web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(get_UserId
    );
    
    Bloc_App.web3 = new Web3(
      new Web3.providers.HttpProvider("#"),
    );
  }

  Bloc_App.start();
});
