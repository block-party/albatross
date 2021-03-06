Web3 = require('web3')
solc = require('solc')
fs = require('fs')
web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.1.27:8545"));
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "users",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "userid",
				"type": "uint256"
			},
			{
				"name": "password",
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
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userid",
				"type": "uint256"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "loginUser",
		"outputs": [
			{
				"name": "s",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUserCount",
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
		"constant": true,
		"inputs": [
			{
				"name": "userid",
				"type": "uint256"
			}
		],
		"name": "getUserById",
		"outputs": [
			{
				"name": "_i",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
<<<<<<< Updated upstream
=======
		"constant": false,
		"inputs": [
			{
				"name": "userid",
				"type": "uint256"
			},
			{
				"name": "proj_id",
				"type": "uint256"
			},
			{
				"name": "proj_name",
				"type": "string"
			},
			{
				"name": "proj_desc",
				"type": "string"
			},
			{
				"name": "start_date",
				"type": "string"
			},
			{
				"name": "end_date",
				"type": "string"
			},
			{
				"name": "start_time",
				"type": "string"
			},
			{
				"name": "end_time",
				"type": "string"
			},
			{
				"name": "wage",
				"type": "uint256"
			}
		],
		"name": "updateUserproject1",
		"outputs": [
			{
				"name": "s",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
>>>>>>> Stashed changes
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getUser",
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
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "userid",
				"type": "uint256"
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
		"name": "createUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "updateUserproject1",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "updateUserproject2",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]);


<<<<<<< Updated upstream
empc = Employmentcontract.at('0xdc51e96e97464d3cfcfd500e12760ea24c920489')
// empc.createUser("john3", 3,"isris","fig",0,{from:web3.eth.accounts[0], gas: 500000})
// empc.createUser("john4", 4,"isris","fig",0,{from:web3.eth.accounts[0], gas: 500000})
// empc.createUser("john5", 5,"isris","fig",0,{from:web3.eth.accounts[0], gas: 500000})
// empc.createUser("john6", 6,"isris","fig",0,{from:web3.eth.accounts[0], gas: 500000})
console.log(empc.loginUser(3, "blaj"))
=======
 empc = Employmentcontract.at('0x09e2a140eec0c087f00b3651a914c64afef39079')
// empc.createUser("joseph",1,"isris","fig",0,{from:web3.eth.accounts[0], gas: 500000})
// empc.createUser("jibin",2,"isris","fig",0,{from:web3.eth.accounts[0], gas: 500000})
// empc.createUser("christie",3,"isris","fig",0,{from:web3.eth.accounts[0], gas: 500000})

empc.updateUserproject1(1,1,"construction","project related with construction","12/12/13","1/3/14","10:00:00","23:22:22",100,{from:web3.eth.accounts[0], gas: 500000})
empc.updateUserproject1(2,1,"plumping","project related with plumping","12/12/13","1/3/14","10:00:00","23:22:22",100,{from:web3.eth.accounts[0], gas: 500000})
empc.updateUserproject1(3,1,"cooking","project related with cooking","12/12/13","1/3/14","10:00:00","23:22:22",100,{from:web3.eth.accounts[0], gas: 500000})
    
//console.log(empc.loginUser(3,"blaj"))
>>>>>>> Stashed changes
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

