window.onload = function(){

if(sessionStorage.getItem("user")==null){
    window.location.replace("index.html");
   }
else{
            var con_btn = document.getElementById("add");
            con_btn.onclick=function(){
                var new_add = document.getElementById("new_box");
                new_add.style.display="block";
            }

            var close = document.getElementById("btn_close");
            close.onclick=function(){
                var box = document.getElementById("new_box");
                box.style.display="none";
            }

            var add_btn = document.getElementById("btn_add");
            add_btn.onclick=function(){
            
                var name_value = document.getElementById("user_name").value;
                var no_value = document.getElementById("user_no").value;
                alert(name_value);
            }

                    var url = sessionStorage.getItem("user");
                    var pic = localStorage.getItem(url+"image");
                    
                    var img = document.getElementById("circle");
                    img.style.backgroundImage="url("+pic+')';
                    img.style.backgroundPosition="centre";
                    img.style.backgroundSize="cover";
        }

}
