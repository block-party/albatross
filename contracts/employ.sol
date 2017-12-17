pragma solidity ^0.4.18;

contract Employ
{

    mapping ( address => User ) Users;  
    address[] usersByAddress; 
    
    struct User {
    string handle;
    bytes32 name;
    bytes32 password;
    
  } 
  function registerNewUser(string handle, bytes32 name,bytes32 password) returns (bool success) {
    address thisNewAddress = msg.sender;
    // don't overwrite existing entries, and make sure handle isn't null
    if(bytes(Users[msg.sender].handle).length == 0 && bytes(handle).length != 0){
      Users[thisNewAddress].handle = handle;
      Users[thisNewAddress].name = name;
      Users[thisNewAddress].password = password;
      usersByAddress.push(thisNewAddress);  // adds an entry for this user to the user 'whitepages'
      return true;
    } else {
      return false; // either handle was null, or a user with this handle already existed
    }
  }
  function getUsers() constant returns (address[]) { return usersByAddress; }
  
  function getUser(address userAddress) constant returns (string,bytes32,bytes32) {
    return (Users[userAddress].handle,Users[userAddress].name,Users[userAddress].password);
  }

    
}
