

var current = sessionStorage.getItem("user");

if(current == null)
{
    window.location.replace("index.html");
}

var b = document.getElementById("video");
//time

var time = document.getElementById("time");
var b = document.getElementById("video");
b.ontimeupdate=function(){
    var c_time = this.currentTime;
    var t_time = this.duration;
    var bar = document.getElementById("bar");
    var v_time = document.getElementById("v_time");
    
    var sec = c_time-parseInt(c_time/60)*60;
    var t_sec = t_time-parseInt(t_time/60)*60;

    v_time.innerHTML=parseInt(c_time/60)+":"+parseInt(sec)+"/"+parseInt(t_time/60)+":"+parseInt(t_sec);

    var slide = c_time*100/t_time;

    
    bar.style.width=slide+"%";

    if(c_time==t_time){
        play.className="fas fa-play-circle"
    }

}

//play pause

var play = document.getElementById("play");
play.onclick=function(){
   if(play.className=="fas fa-play-circle"){
    b.play();
    play.className="fa-solid fa-circle-pause";
    
   }
   else if(play.className=="fa-solid fa-circle-pause"){
    b.pause();
    play.className="fas fa-play-circle";
   }
}

//add btn click
var add_btn = document.getElementById("add_btn");
add_btn.onclick=function()
{
    var add_v = document.getElementById("add_v");
    
    if(add_btn.className=="fas fa-plus-circle")
    {
        add_v.style.display="block";
        add_btn.className="fas fa-times-circle";
    }
    else if(add_btn.className=="fas fa-times-circle")
    {
        add_v.style.display="none";
        add_btn.className="fas fa-plus-circle";
    }

}

//add link in local storeae
function add_link()
{
    
var add_local = document.getElementById("add_local");
add_local.onclick=function()
{
    var name = document.getElementById("add_name");
    var link = document.getElementById("add_url");
    if(name.value!="" && link.value!=""){
        var obj  = {video_name:name.value,video_link:link.value};
        var txt = JSON.stringify(obj);
        localStorage.setItem(current+"video_"+name.value,txt);
        window.location.reload();
    }
   

   
}


}
add_link();

//featch video
function fetch()
{
   
    var i ;
    for(i=0;i<localStorage.length;i++)
    {
       all_key = localStorage.key(i);
       if(all_key.match(current+"video_"))
       {
      var data = localStorage.getItem(all_key);
      var txt = JSON.parse(data);
      var video_name = txt.video_name;
      var video_link = txt.video_link;

            var list = document.createElement("DIV");
            list.setAttribute("id", "list");
        
  

            var title =document.createElement("H2");
            title.innerHTML=video_name;
            title.setAttribute("class","head")

            var play =document.createElement("BUTTON");
            play.setAttribute("id","play_btn");
            play.setAttribute("class","play_video");
            play.setAttribute("type","button");
            play.setAttribute("url",video_link);
            play.innerHTML="Play";

            var del =document.createElement("BUTTON");
            del.setAttribute("id","del");
            del.setAttribute("type","button");
            del.setAttribute("class","del");
            del.innerHTML="Delete";

            list.appendChild(title);
            list.appendChild(play);
            list.appendChild(del);

            var bar = document.getElementById("bottom");
            bar.append(list);
       }
    }
}

fetch();


// play btn video src

function play_btn()
{
    var all_btn = document.getElementsByClassName("play_video");
    var i ; 
    for(i=0;i<all_btn.length;i++)
    {

        all_btn[i].onclick=function()
        {
            clear();
            var link = this.getAttribute("url");
            var src_b  = document.getElementById("source");
            src_b.setAttribute("src",link);
            var video = document.getElementById("video");
           
            this.innerHTML="Playing..";
           
           var dic = this.parentElement;
           dic.style.backgroundColor = "#9FFFB7";
           
            play.className="fa-solid fa-circle-pause";
            video.load();
            b.play();
           
      
        }
    }

}

function clear()
{
    var all_btn = document.getElementsByClassName("play_video");
    var i ; 
    for(i=0;i<all_btn.length;i++)
    {
        all_btn[i].innerHTML="Play";
         var dic = all_btn[i].parentElement;
        dic.style.backgroundColor = "#d9cece";
    }
}

play_btn();

//del d btn
function del()
{
    var all_btn = document.getElementsByClassName("del");
    var i ; 
    for(i=0;i<all_btn.length;i++)
    {
        all_btn[i].onclick=function()
        {
           var parant = this.parentElement;
           var v_name = parant.getElementsByTagName("H2")[0];
           var name = v_name.innerHTML;
          
       
          localStorage.removeItem(current+"video_"+name);
          parant.className = "animate__animated animate__bounceOut";
          setTimeout(function(){
             parant.remove();
          },1000);
        }
    }
}

del();

//next button

function  next()
{
var nxt = document.getElementsByClassName("fa-solid fa-angles-right")[0];
nxt.onclick=function()
{
    var all_btn = document.getElementsByClassName("play_video");
    var i ; 
    for(i=0;i<all_btn.length;i++)
    {

        
        if(all_btn[i].innerHTML == "Playing..")
        {
           var div = all_btn[i].parentElement.nextSibling;
       var ro = div.getElementsByClassName("play_video")[0];
           ro.click();

           return false;
        }
    }
}


}

next();

//previce video


function  pre()
{
var nxt = document.getElementsByClassName("fa-solid fa-angles-left")[0];
nxt.onclick=function()
{
    var all_btn = document.getElementsByClassName("play_video");
    var i ; 
    for(i=0;i<all_btn.length;i++)
    {

        
        if(all_btn[i].innerHTML == "Playing..")
        {
           var div = all_btn[i].parentElement.previousSibling;
       var ro = div.getElementsByClassName("play_video")[0];
           ro.click();

           return false;
        }
    }
}


}

pre();


// search box

function search()
{
    var seh = document.getElementById("search");
    seh.oninput=function()
    {
        var v_name = document.getElementsByClassName("head");
        // alert(v_name[0].innerHTML);
        var i ;
        for(i=0;i<v_name.length;i++)
            {
                    if(v_name[i].innerHTML.toLowerCase().match(seh.value.toLowerCase()))
                        {
                            v_name[i].parentElement.style.display="block";
                        }
                        else
                        {
                            v_name[i].parentElement.style.display="none";
                        }
            }   
    }
}

search();

//volume
function volume()
{
    
var vol = document.getElementById("vol");
var key = document.getElementsByClassName("fa-solid fa-volume-high")[0];
key.onclick=function()
{
 if(vol.className == "bar")
 {
    vol.style.display="block";
    vol.className="car";
    vol.oninput=function()
    {
        var b = document.getElementById("video");
        b.volume=this.value;


        

    setTimeout(function(){
        vol.style.display="none";
     },12000);

    }
 }
 else if(vol.className == "car")
 {
    vol.style.display="none";
    vol.className="bar";
 }


//alert(t);
}
}

volume();

//expand

function ex()
{
var expand = document.getElementsByClassName("fa-solid fa-expand")[0];
expand.onclick=function()
{
    b.requestFullscreen();
}
}

ex();


//speedmeter

function meter()
{
    
var speedmeter = document.getElementById("speed");
var set = document.getElementsByClassName("fa-solid fa-gauge")[0];
set.onclick=function()
{

  if(speedmeter.style.display == "none")
   {
    speedmeter.style.display="block";
    speedmeter.oninput=function()
    {
        b.playbackRate = speedmeter.value;
             

    setTimeout(function(){
        speedmeter.style.display="none";
     },12000);

    
    }
   }
   else
   {
    speedmeter.style.display="none";
   }
}
}

meter();

//bar progresser

var box = document.getElementById("progress");
box.onclick=function(event)
{
    var per = event.offsetX/this.offsetWidth;
    b.currentTime=per*b.duration;
    
}

var rot = document.getElementById("click");
rot.onclick=function()
{
    var uo = document.getElementById("add_btn");
    uo.click();
}
