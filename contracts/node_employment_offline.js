Web3 = require('web3')
solc = require('solc')
fs = require('fs')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//web3.eth.defaultAccount = web3.eth.accounts[0];

code = fs.readFileSync('Workercontract.sol').toString()
compiledCode = solc.compile(code)

abi = JSON.parse(compiledCode.contracts[':Worker'].interface)
var Employmentcontract = web3.eth.contract(abi)


byteCode = compiledCode.contracts[':Worker'].bytecode

deployedContract = Employmentcontract.new([],{data: byteCode, from: web3.eth.accounts[0], gas: 3000000},function(e, contract)
{

if(!e) {
  if(!contract.address) {
    //console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
  } else {
    console.log("Contract mined! Address: " + contract.address);
    empc = Employmentcontract.at(contract.address)
    console.log(empc.getName())
    

   

  }
}     else{   
	//console.log(e);     
}     
});






