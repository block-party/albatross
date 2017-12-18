Web3 = require('web3')
solc = require('solc')
fs = require('fs')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

/*
code = fs.readFileSync('Workercontract.sol').toString()
compiledCode = solc.compile(code)
console.log(web3.eth.gasPrice)

abi = JSON.parse(compiledCode.contracts[':UserContract'].interface)
*/
var Employmentcontract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "iris",
				"type": "string"
			}
		],
		"name": "getCustomerById",
		"outputs": [
			{
				"name": "iris_ret",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "dateOfBirth",
				"type": "uint256"
			},
			{
				"name": "social",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "iris",
				"type": "string"
			},
			{
				"name": "fingerprint",
				"type": "string"
			},
			{
				"name": "verified",
				"type": "uint256"
			}
		],
		"name": "createWorker",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getWorkerCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "updateWorker",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getWorker",
		"outputs": [
			{
				"name": "iris_",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "dateOfBirth",
				"type": "uint256"
			},
			{
				"name": "social",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "workers",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "iris",
				"type": "string"
			},
			{
				"name": "fingerprint",
				"type": "string"
			},
			{
				"name": "verified",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);


empc = Employmentcontract.at('0x10ac4e34ce81e80fd5543afd35b078392b795a86')
//empc.createWorker("chris","isris","fig",0,{from:web3.eth.accounts[0], gas: 500000})
console.log(empc.getWorkerCount())
//empc.createWorker("soseph jtephan","iris2","finger1",0)

/*	

byteCode = compiledCode.contracts[':UserContract'].bytecode

deployedContract = Employmentcontract.new([],{data: byteCode, from: web3.eth.accounts[0], gas: 3000000},function(e, contract)
{

if(!e) {
  if(!contract.address) {
    //console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
  } else {
    console.log("Contract mined! Address: " + contract.address);
    empc = Employmentcontract.at(contract.address)
    console.log(empc.getTest())
    

   

  }
}     else{   
	//console.log(e);     
}     
});




*/

