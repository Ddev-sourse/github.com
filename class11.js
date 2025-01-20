

window.onload=function()
        {
            var a = sessionStorage.getItem("user");
            if(a==null)
        {
            window.location.replace("index.html");
        
        }
        else{
            
var a =document.getElementById("u1");
a.onclick=function(){
        window.open(unit1.pdf);
}
$(document).ready(function(){
    $("#box h1").click(function(){
        $("#box div").slideToggle(1000);
    });

    $("#box1 h1").click(function(){
        $("#box1 div").slideToggle(1000);
    });

    
    $("#box3 h1").click(function(){
        $("#box3 div").slideToggle(1000);
    });

    
    $("#box4 h1").click(function(){
        $("#box4 div").slideToggle(1000);
    });

    $("#arrow").click(function(){
        window.location="msg.html";
    });
});

        }

    }


