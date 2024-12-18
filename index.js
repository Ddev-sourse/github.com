

var sign = document.getElementById("sign_box");
var login = document.getElementById("login_box");

function signin()
{
    login.style.display="none";
    sign.style.display="block"; 
    
}

function login_i()
{

    login.style.display="block";
    sign.style.display="none"; 
}

//login condition

var l_form = document.getElementById("login_frm");
var email_login = document.getElementById("email_i");
var pass_login = document.getElementById("pass"); 

l_form.onsubmit=function()
{
 if(email_login.value == "" || pass_login.value == ""){
    if(pass_login.value === ""){
        pass_login.style.borderBottom = "1px solid red";
    }
    if(email_login.value === ""){
        email_login.style.borderBottom = "1px solid red";
    }
   return false;    

 }
}


//signin condition

var s_form = document.getElementById("sign_frm");
var user = document.getElementById("username");
var email_sign = document.getElementById("email_i");
var mobile = document.getElementById("phone"); 
var pass_sign = document.getElementById("pass"); 

