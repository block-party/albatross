pragma solidity ^0.4.18;

contract UserContract 
{
    struct Project
    {
        uint proj_id;
        string proj_name;
        string proj_desc;
        string start_date;
        string end_date;
        string start_time;
        string end_time;
        uint wage;
    }
   struct User
   {
        string name;
        uint userid;
        string password;
        string iris;
        string fingerprint;
        bool verified;
        Project[] p1;
        Project[] p2;
    }
    
    User[] public users;
    
    function createUser (string name, uint userid, string iris, string fingerprint,bool verified) public
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
       int id = getUserIndexById(userid);
       
        if (id == -1)
            return false;
        else
            return true;
        
    }
    
    function updateUserproject1(uint userid,uint proj_id,string proj_name,string proj_desc,string start_date,string end_date,string start_time,string end_time,uint wage) public returns (bool s)
    {
        int id = getUserIndexById(userid);
        if (id == -1)
            return false;
        else
            {
                users[uint(id)].p1.push(Project(proj_id,proj_name,proj_desc,start_date,end_date,start_time,end_time,wage));
            }
        
    }
    
    /*
    function viewUserproject1(uint userid) public constant returns(Project proj)
    {
        int id = getUserIndexById(userid);
        id = uint(id);
        proj = users[id].p1;
        
    }
    */
    
    function updateUserproject2(uint userid,uint proj_id,string proj_name,string proj_desc,string start_date,string end_date,string start_time,string end_time,uint wage) public returns (bool s)
    {
        int id = getUserIndexById(userid);
        if (id == -1)
            return false;
        else
            {
                users[uint(id)].p2.push(Project(proj_id,proj_name,proj_desc,start_date,end_date,start_time,end_time,wage));
            }
        
    }
    
    function userStatus(uint index,bool status) 
    {
        users[index].verified = status;
    }
    
    function getUserCount() public constant returns (uint)
    {
        return users.length;
    }
    
    function getUser(uint userid)  constant returns (string iris_, string name_)
    {
        
        int id = getUserIndexById(userid);

    }
    
    
    function getUserIndexById(uint userid)  constant returns (int _i)
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

