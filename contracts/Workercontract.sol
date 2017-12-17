pragma solidity ^0.4.18;
import "stringUtils.sol";

contract WorkerContract {

   struct User{
        string iris;
        string name;
        uint dateOfBirth;
        uint social;
        uint status;
        string project;

    }
    
    uint constant active = 1;
    uint constant pending = 2;
    uint constant deleted = 3;
    mapping (uint => User) workers;
    uint public count = 0;
    
    function getWorker(uint index) constant returns (string iris_, string name, uint dateOfBirth, uint social, uint status)
    {
    
        iris_ = workers[index].iris;
        name = workers[index].name;
        dateOfBirth = workers[index].dateOfBirth;
        social = workers[index].social;
        status = workers[index].status;

    }
    
    function getCustomerById(string iris) constant returns (string iris_ret, string name, uint dateOfBirth, uint social, uint status)
    {
        for (var i=0; i<count; i++)
        {
            if (StringUtils.equal(iris,workers[i].iris)) {
                iris_ret = workers[i].iris;
                name = workers[i].name;
                dateOfBirth = workers[i].dateOfBirth;
                social = workers[i].social;
                status = workers[i].status;
                return;
            }
    
        }

    }
   function updateWorker(uint index, string name) {
            if (index > count) throw;
        workers[index].name = name;
    
    }
    function updateCustomerStatus(uint index, uint status) {
    if (index > count) throw;
        workers[index].status = status;
    }
    
}