pragma solidity ^0.4.18;

contract UserContract 
{
   string test;
   uint public count = 0;
   mapping (uint => User) workers;
   struct User
   {
        string name;
        string iris;
        string fingerprint;
        uint verified;

    }
    function UserContract()     
    {
       test = "asshole albert ross";
    }
    function getTest() constant  returns (string t)
    {
        return test;
    }
    
    function createWorker (string name, string iris, string fingerprint,uint verified)
    {
        workers[count] = User(name,iris,fingerprint,verified);
        count ++;
        
    }
   
    function getWorker(uint index)  constant returns (string iris_, string name, uint dateOfBirth, uint social, uint status)
    {
    
        iris_ = workers[index].iris;
        name = workers[index].name;

    }
     function getCustomerById(string iris)  constant returns (string iris_ret, string name, uint dateOfBirth, uint social, uint status)
    {
        for (var i=0; i<count; i++)
        {
            /*
            if (StringUtils.equal(iris,workers[i].iris)) {
                iris_ret = workers[i].iris;
                name = workers[i].name;
                return;
            }
            */
    
        }

    }
   function updateWorker(uint index, string name) {
            if (index > count) throw;
        workers[index].name = name;
    
    }
   
    
    
    
}

