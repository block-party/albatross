Web3 = require('web3')
solc = require('solc')
fs = require('fs')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];


code = fs.readFileSync('Workercontract.sol').toString();


compiledCode = solc.compile(code)

abi = JSON.parse(compiledCode.contracts[':UserContract'].interface)


var Employmentcontract = web3.eth.contract(abi);
byteCode = compiledCode.contracts[':UserContract'].bytecode;

deployedContract = Employmentcontract.new([],{data: byteCode, from: web3.eth.accounts[0], gas: 3000000},function(e, contract)
{

if(!e) {
  if(!contract.address) {
    //console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
  } else {
    console.log("Contract mined! Address: " + contract.address);
    empc = Employmentcontract.at(contract.address)
   //empc.createWorker("chris","isris","fig",0,{from:web3.eth.accounts[0], gas: 500000})
    
   

  }
}     else{   
	//console.log(e);     
}     
});

/*
empc = Employmentcontract.at()
//empc.createWorker("chris","isris","fig",0,{from:web3.eth.accounts[0], gas: 500000})
console.log(empc.getWorkerCount())
//empc.createWorker("soseph jtephan","iris2","finger1",0)

*/
