pragma solidity ^0.4.18;

contract UserContract 
{
    struct project
    {
        uint128 proj_id;
        string proj_name;
        string proj_desc;
        uint32 star_date;
        uint32 end_date;
        uint32 start_time;
        uint32 end_time;
        uint32 wage;
    }
   struct User
   {
        string name;
        uint userid;
        string password;
        string iris;
        string fingerprint;
        uint verified;
        project[] p1;
        project[] p2;
    }
    
    User[] public users;
    
    function createUser (string name, uint userid, string iris, string fingerprint,uint verified) public
    {   
        users.length++;
        users[users.length-1].name = name;
        users[users.length-1].userid = userid;
        users[users.length-1].iris = iris;
        users[users.length-1].fingerprint = fingerprint;
        users[users.length-1].verified = verified;
            
    }
    
    function loginUser(uint userid,string password) constant public returns (bool s)
    {
       int id = getUserById(userid);
       
        if (id == -1)
            return false;
        else
            return true;
        
    }
    function updateUserproject1()
    {
        
    }
    
    function updateUserproject2()
    {
        
    }
    
    function getUserCount() public constant returns (uint)
    {
        return users.length;
    }
    
    function getUser(uint index)  constant returns (string iris_, string name, uint dateOfBirth, uint social, uint status)
    {
    
        iris_ = users[index].iris;
        name = users[index].name;
        

    }
    
    function getUserById(uint userid)  constant returns (int _i)
    {
        for (var i=0; i<users.length; i++)
        {
            
            if (users[i].userid == userid) {
                return i;
            }
            
    
        }
        return (-1);

    }
    

   
    
    
    
}

