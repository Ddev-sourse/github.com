//sign uo script
var signup_frm = document.getElementById("sign_frm");
signup_frm.onsubmit=function()
{

    var user = btoa(document.getElementById("username").value);
    var email = btoa(document.getElementById("email_s").value);
    var mobile_sign = btoa(document.getElementById("phone").value);
    var pass = btoa(document.getElementById("password_s").value);

    var user_object_data = {username:user,email:email,mobile : mobile_sign,password:pass};
    var user_text_data = JSON.stringify(user_object_data);


  if(user != "" && email!="" && mobile_sign !="" && pass !="")
    {
      localStorage.setItem(email,user_text_data);
    var s_btn = document.getElementById("btn_sign");
    s_btn.style.background="#14b129";
    s_btn.innerHTML="<i class='fas fa-check-circle'></i> Sign up Successful !";
    setTimeout(  function sign(){
        s_btn.style.background=" linear-gradient(to right, #E100FF, #7F00FF)";
        s_btn.innerHTML = "sign up";
        signup_frm.reset();
    },3000);

   
      return false;
    }


    
}

//signup conditon valoidation code

var email_input = document.getElementById("email_s");
email_input.onchange= function()
{
    var war = document.getElementById("email_notice");
    var email = document.getElementById("email_s").value;
    var s_btn = document.getElementById("btn_sign");
    if(localStorage.getItem(btoa(email)) != null){
        war.style.display="block";
        email_input.style.borderBottomColor="red";
        s_btn.disabled = true;
        s_btn.style.background = "#ccc";

        email_input.onclick=function()
        {
            email_input.value = "";
            email_input.style.borderBottomColor="#ccc";
            war.style.display="none";
            s_btn.disabled = false;
            s_btn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)";

        }
    }
    else{
        s_btn.disabled =false;
    }
}

//login code

var btn_lo = document.getElementById("btn_login");
var email_lo = document.getElementById("email_l");
var pass_lo = document.getElementById("password_l");

var email_war = document.getElementById("l_email_war");
var pass_war = document.getElementById("l_pass_war");

var log_frm = document.getElementById("login_frm");
log_frm.onsubmit=function()
{
 if(localStorage.getItem(btoa(email_lo.value)) == null){
  email_war.style.display="block";
  email_lo.style.borderBottomColor="red";
        email_lo.onclick=function(){
          email_war.style.display="none";
          email_lo.style.borderBottomColor="#ccc";
        }
 
 }
 else{
    var text_data = localStorage.getItem(btoa(email_lo.value));
    var object_data = JSON.parse(text_data);
    var reg_email = object_data.email;
    var reg_pass = object_data.password;

    if(btoa(email_lo.value) == reg_email)
    {
      if(btoa(pass_lo.value) == reg_pass){
        
                  
        window.location.replace("profile.html");
        sessionStorage.setItem("user",btoa(email_lo.value));






      }
      else{
        pass_war.style.display="block";
        pass_lo.style.borderBottomColor="red";
      
        btn_lo.style.background="#ccc";

        pass_lo.onclick=function(){
          pass_lo.value="";
          pass_war.style.display="none";
          pass_lo.style.borderBottomColor="#ccc";
         
          btn_lo.style.background=" linear-gradient(to right, #E100FF, #7F00FF)";
        }
      }
    }
   

 }

 return false;
}
