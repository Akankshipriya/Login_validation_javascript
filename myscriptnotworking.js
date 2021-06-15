/*var form=document.getElementById('form');
var username=document.getElementById('username');
var email=document.getElementById('email');
var phone=document.getElementById('phone');
var password=document.getElementById('password');
var confirmpassword=document.getElementById('confirmpassword');*/
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
    var e=false;
    var u=false;
    var p=false;
    var pass=false;
    var c=false;
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
        u=true;
        window.alert("success name"+String(u));
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
        e=true;
        window.alert("success Email"+String(e));
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
        p=true;
        window.alert("success phone"+String(p));
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
        pass=true;
        window.alert("success password"+String(pass));
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
        var c=true;
        window.alert("Password Confirmed Successfully"+String(c));
    }
    //window.alert(String(u)+String(e)+String(p)+String(pass)+String(c));
    
    //window.location="practice.html";
    if (5<6)
    {
        window.location="practice.html";
    }
    else
    {
        window.alert("sorry");
    }
}


/*form.addEventListener('onclick',(event)=>{
    event.preventDefault();
})*/
/*function myfun()
{
    window.alert("Hey")
}*/



