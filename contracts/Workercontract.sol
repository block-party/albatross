pragma solidity ^0.4.18;
import "stringUtils.sol";

contract UserContract
 {

   string test;    
   struct User
   {
        string name;
        string iris;
        string fingerprint;
        bytes32[] project;
        uint verified;

    }
    struct Projects
    {
        
    }
    function UserContract()
    {
       test = "asshole albert ross";
    }
    
    function getTest() constant public returns (string t)
    {
        return test;
    }
    
    mapping (uint => User) workers;
    uint public count = 0;
    
    function getWorker(uint index) constant returns (string iris_, string name, uint dateOfBirth, uint social, uint status)
    {
    
        iris_ = workers[index].iris;
        name = workers[index].name;

    }
    
    function getCustomerById(string iris) constant returns (string iris_ret, string name, uint dateOfBirth, uint social, uint status)
    {
        for (var i=0; i<count; i++)
        {
            if (StringUtils.equal(iris,workers[i].iris)) {
                iris_ret = workers[i].iris;
                name = workers[i].name;
                return;
            }
    
        }

    }
   function updateWorker(uint index, string name) {
            if (index > count) throw;
        workers[index].name = name;
    
    }
    
    
    
}