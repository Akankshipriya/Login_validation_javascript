
function isEmail(email)
{
    var atSymbol=email.indexOf("@");
    if(atSymbol<1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function myfun()
{
    //var form=document.getElementById('form');
    
    var a=0;
    var username=document.getElementById('username').value;
    var email=document.getElementById('Email').value;
    var phone=document.getElementById('phone').value;
    var password=document.getElementById('password').value;
    var confirmpassword=document.getElementById('confirmpassword').value;
    if (username==="")
    {
        
        window.alert("please enter your name");
        
    }
    else if(username.length<=2)
    {
        
        window.alert("minimum 3 character required");
        
    }
    else
    {
        a=a+1;
        window.alert("success name");
        
    }
    if (email==="")
    {
        window.alert("Email cannot be blank");
        
    }
    else if(!isEmail(email))
    {
        window.alert("Not a valid Email");
        
    }
    else
    {
        a=a+1;
        window.alert("success Email");
        
    }
    if (phone==="")
    {
        window.alert("Please enter your phone number");
        
    }
    else if(phone.length!=10)
    {
        window.alert("Exact 10 character required");
    
    }
    else
    {
        a=a+1;
        window.alert("success phone");
        
    }
    if (password==="")
    {
        
        window.alert("Password cannot be blank");
        
    }
    else if(password.length<=5)
    {
        
        window.alert("minimum 6 character required");
        
    }
    else
    {
        a=a+1;
        window.alert("success password");
        
    }
    if(confirmpassword==="")
    {
        
        window.alert("Please confirm password");
    
    }
    else if (password!=confirmpassword)
    {
        window.alert("Mismatch");
        
    }
    else
    {
        a=a+1;
        window.alert("Password Confirmed Successfully");
    
    }
    console.log(a);
    if (String(a)=="5")
    {
        window.location.href="practice.html";
        
    }
    else
    {
        window.alert("Data not filled completely");
        
    }
    /*
    if (true)
    {
        window.location.href="https://www.geeksforgeeks.org/";
    }*/
}
