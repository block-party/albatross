pragma solidity ^0.4.18;

contract UserContract 
{
   struct User
   {
        string name;
        string iris;
        string fingerprint;
        uint verified;

    }
   User[] public workers;
    
    function createWorker (string name, string iris, string fingerprint,uint verified) public
    {   
        workers.length++;
        workers[workers.length-1].name = name;
        workers[workers.length-1].iris = iris;
        workers[workers.length-1].fingerprint = fingerprint;
        workers[workers.length-1].verified = verified;
            
    }
   
    
    function getWorkerCount() public constant returns (uint)
    {
        return workers.length;
    }
    
    function getWorker(uint index)  constant returns (string iris_, string name, uint dateOfBirth, uint social, uint status)
    {
    
        iris_ = workers[index].iris;
        name = workers[index].name;
        

    }
    
    function getCustomerById(string iris)  constant returns (string iris_ret, string name, uint dateOfBirth, uint social, uint status)
    {
        for (var i=0; i<workers.length; i++)
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
   function updateWorker(uint index) {
            
    
    }
   
    
    
    
}

