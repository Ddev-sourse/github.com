var btn = document.getElementById("btn_login");
var d = document.cookie.split("=");
var e = d[1];
var f = d[2];
window.onload=function(){
  
        

                    var d = document.cookie.split('=');
                    var e = d[1];
                    var f = d[2];
                       
    document.getElementById("email_l").value = e;
    document.getElementById("password_l").value = f;
    
                //alert();
                welcome();
        function welcome()
        {
            
            var pic = document.getElementById("pic");
            pic.style.display="block";
            setTimeout(function(){
             var w = document.getElementById("wel");
             w.style.display="block";
            },500)


            
         setTimeout(
             function()
             {
                var screen = document.getElementById("screen");
            var pic = document.getElementById("pic");
            pic.style.display="none";
            screen.style.display="block";

             }

         ,2000);
        }
     
}
