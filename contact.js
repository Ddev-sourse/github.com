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
               var number_data = {mobile_name:name_value,mobile_no:no_value};
              var text_data = JSON.stringify(number_data);
              var url = sessionStorage.getItem("user");
              if(name_value!="" && no_value != ""){
                localStorage.setItem(url+"_contacts_"+name_value,text_data);
                add_btn.style.backgroundColor="green";
               
                setTimeout(function(){
                    
                    var new_add = document.getElementById("new_box");
                    new_add.style.display="none";
                    add_btn.style.backgroundColor="blue";
                    var name_value = document.getElementById("user_name");
                    var no_value = document.getElementById("user_no");
                    name_value.value="";
                    no_value.value="";
                    name_value.style.borderColor="blue";
                    no_value.style.borderColor="blue";
                    window.location.reload();
                 
                },1000);
              }
              else
              {
                var name_r = document.getElementById("user_name");
              
                var name_e = document.getElementById("user_no");
            
                if(name_r.value==""){
                    name_r.style.borderColor="red";
                    add_btn.style.backgroundColor="red";
                    name_r.onclick=function(){
                        name_r.style.borderColor="blue";
                        name_e.style.borderColor="blue";
                    }
                }
                else if(name_e.value==""){
                    name_e.style.borderColor="red";
                    add_btn.style.backgroundColor="red";
                    name_e.onclick=function(){
                        name_e.style.borderColor="blue";
                    }
                   
                }
                if(name_r.value=="" && name_e.value==""){
                    name_r.style.borderColor="red";
                    name_e.style.borderColor="red";
                    add_btn.style.backgroundColor="red";
                }
                return false;
              }

             
   



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
                      h1_name_i.setAttribute("class","fas fa-user")
                      h1_name.setAttribute("id","h1_name");
                      h1_name.setAttribute("class","name_contacts");  //name
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
                      var edit = document.createElement("I");           //EDIUY
                      edit.setAttribute("class","fa-solid fa-user-pen edit");
                   
                      tools.appendChild(edit);

                      var del = document.createElement("I");
                      del.setAttribute("class","fa-solid fa-trash clear" ); 
                     //del
                  
                      
                      tools.appendChild(del);
                      contacts.appendChild(tools);

                      
                  
                    }
                
                    
                    
                    


        }

        //search box
      
     
        var box_se = document.getElementById("search_box");
        box_se.oninput=function(){
            var name_s = document.getElementsByClassName("name_contacts");
           //alert(name_s[0].innerHTML);
           var i;
            for(i=0;i<name_s.length;i++){ 
                
                var q = name_s[i].innerHTML.replace('<i id="h1_name_i" class="fas fa-user-circle"></i>');
            
                if(q.toUpperCase() .match(box_se.value.toUpperCase()))
                {
                  name_s[i].parentElement.style.display="block";
                 }
                 else{
                    name_s[i].parentElement.style.display="none";
                 }
                
            }
           
        }
     
        var rem = document.getElementsByClassName("clear");
        var i;
        for(i=0;i<rem.length;i++)
        {
            rem[i].onclick=function()
            {
                var p = this.parentElement.parentElement;
              var h1 =   p.getElementsByClassName("name_contacts")[0];
              //alert();


                localStorage.removeItem(url+"_contacts_"+h1.innerHTML.replace('<i id="h1_name_i" class="fas fa-user"></i>',''));
                 p.className = "animate__animated animate__bounceOut";
                 setTimeout(function(){
                    p.remove();
                 },1000);
               
            }
        }

   //edit
        var e_t = document.getElementsByClassName("edit");
        var l ;
        for(l=0;l<e_t.length;l++)
            {
                e_t[l].onclick=function()
                {
                    var parant = this.parentElement.parentElement;
                    var data = parant.getElementsByTagName("h1");
                    var name = data[0].innerHTML.replace('<i id="h1_name_i" class="fas fa-user"></i>',"").trim();
                    var number = data[1].innerHTML.replace('<i id="h1_name_i" class="fas fa-user"></i>',"").trim();
                    
                    var u_name = document.getElementById("user_name");
                    var u_no = document.getElementById("user_no");
                    var add = document.getElementById("add");
                    var btn1 = document.getElementById("btn_close");
                    var btn2 = document.getElementById("btn_add");
                    var p = document.getElementById("p");

                    u_name.value=name;
                    u_no.value=number;
                    btn1.style.display="none";
                    btn2.style.backgroundColor="green";
                    btn2.innerHTML="UPDATE"
                    p.innerHTML="Edit Contacts"
                    add.click();
                    localStorage.removeItem(url+"_contacts_"+name);


                }
            }


  
}
