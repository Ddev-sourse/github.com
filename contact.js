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


        
        var i;
        for(i=0;i<localStorage.length;i++){
            var l = localStorage.key(i);
                    if(l.match(url+"_contacts_")){
                    var txt = localStorage.getItem(l)
                      var obj = JSON.parse(txt);

                    var box = document.getElementById("number_box");
                      var contacts = document.createElement("DIV");
                      contacts.setAttribute("id", "all_c");
                      box.appendChild(contacts);

                      var h1_name = document.createElement("H1");
                      var h1_name_i = document.createElement("I");
                      h1_name_i.setAttribute("id", "h1_name_i");
                      h1_name_i.setAttribute("class","fas fa-user-circle")
                      h1_name.setAttribute("id","h1_name");
                      h1_name.innerHTML+=obj.mobile_name;
                      
                      contacts.appendChild(h1_name);
                      h1_name.appendChild(h1_name_i);
                      var hr = document.createElement("HR");
                      hr.style.width="90%";
                      hr.style.marginLeft="10px";
                      hr.style.marginTop="5px";
                      contacts.appendChild(hr);


                      var num_h1 = document.createElement("H1");
                      num_h1.setAttribute("id","num_h1");
                      num_h1.innerHTML+=obj.mobile_no;
                      contacts.appendChild(num_h1);
                      var num_h1_i = document.createElement("I");
                      num_h1_i.setAttribute("id", "num_h1_i");
                      num_h1_i.setAttribute("class", "fa-solid fa-mobile-screen");
                      contacts.appendChild(num_h1_i);

                      var tools = document.createElement("DIV");
                      tools.setAttribute("id" , "tool");
                      var edit = document.createElement("I");
                      edit.setAttribute("class","fa-solid fa-user-pen");
                      tools.appendChild(edit);

                      var del = document.createElement("I");
                      del.setAttribute("class","fa-solid fa-trash");
                      
                      tools.appendChild(del);
                      contacts.appendChild(tools);

                      
                  
                    }
                     
                


        }

        
}
