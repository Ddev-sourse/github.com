
	if(sessionStorage.getItem("user")==null){
		window.location.replace("../index.html");
	}
	else
	{
		//app contacts
		var app_c = document.getElementById("btn_co");
			app_c.onclick=function(){
				window.location.assign("app/contacts/contact.html");
			}	

		var app_c2 = document.getElementById("btn_co2");
			app_c2.onclick=function(){
				window.location.assign("app/contacts/contact.html");
			}	
			

		//del pic
		var del_pic = document.getElementById("del_pic");
		del_pic.onclick=function(){
			var t = sessionStorage.getItem("user");
			localStorage.removeItem(t+"image");
			setTimeout(function(){window.location.reload();},1000)
		
		}
		

		//change img 
		var back_pic = document.getElementById("back");
		back_pic.onclick=function(){
			window.location.reload();
		}

		var change_images = document.getElementById("photo");
		change_images.onchange=function(){
			var images = document.getElementById("image_view");
			var reader = new FileReader();
			reader.readAsDataURL(change_images.files[0]);

				reader.onload=function()
				{
				var o = reader.result;
				images.src=o;
				localStorage.setItem(s+"image",o);
				setTimeout(function(){
					window.location.reload();
				},1000);
				
				}

			}

		//view_img
		var picture = document.getElementById("circle");
		picture.onclick=function (){

			
			var de_img = document.getElementById("device");
		if(de_img.innerHTML == "a"){
			var image_box = document.getElementById("img_up");
			de_img.innerHTML = "b";
			image_box.style.display="block";

			var r = sessionStorage.getItem("user");
			var url = localStorage.getItem(r+"image");
			var photo = document.getElementById("image_view");
			photo.src = url;

			
		}
		else{
			var image_box = document.getElementById("img_up");
			image_box.style.display="none";
			window.location.reload();
			de_img.innerHTML = "a";
		}
			
			
			
		   
			
			


		}
		
		
		
		//logout btn

		var btn_out = document.getElementById("btn_logout");
		btn_out.onclick=function(){
			btn_out.innerHTML="Please wait !"
			setTimeout(function(){
				sessionStorage.clear();
				window.location.reload();
			},2000);

		
		}


		//name code
		var s = sessionStorage.getItem("user");
		var text_data = localStorage.getItem(s);
		var object_data = JSON.parse(text_data);
		var reg_name = object_data.username;
		var n = document.getElementById("page_name");
		n.innerHTML=atob(reg_name);
		var username_pic = document.getElementById("user_name");
		username_pic.innerHTML=atob(reg_name);

		//REDIRECTEDphoto
		

					if(localStorage.getItem(s+"image")!=null)
					{
						
						var full_profile = document.getElementById("profile");
										full_profile.style.display ="none";
						var page_of_profile = document.getElementById("page");	
						page_of_profile.style.display="block";	
						var img_url  = localStorage.getItem(s+ "image");
						var user_pic = document.getElementById("circle");
						user_pic.style.backgroundImage="url("+img_url+")";
						user_pic.style.backgroundSize="cover";
						user_pic.style.backgroundPosition="centre";
	
										
					
						
									
					}
		
		
	


		// pic uploaded
		var box = document.getElementById("profile_pic");
		
		var box_icon = document.getElementById("profile_icon");
		var profile_up = document.getElementById("profile_upload");
				profile_up.onchange=function()
				{
			
						var reader = new FileReader();
						reader.readAsDataURL(profile_up.files[0]);

					reader.onload=function()
					{
						var r = reader.result;
						box.style.backgroundImage="url("+r+")";
						box.style.backgroundSize="cover";
						box.style.backgroundPosition="centre";
						box_icon.style.display="none";
						var btn_up_next = document.getElementById("next");
						btn_up_next.style.display="block";
						btn_up_next.onclick=function()
						{	
							var page_of_profile = document.getElementById("page");					
							var full_profile = document.getElementById("profile");
							full_profile.style.display ="none";
							page_of_profile.style.display="block";
									localStorage.setItem(s+	"image",r);
									var img_url  = localStorage.getItem(s+ "image");
							var user_pic = document.getElementById("circle");
							user_pic.style.backgroundImage="url("+img_url+")";
							user_pic.style.backgroundSize="cover";
							user_pic.style.backgroundPosition="centre";
	
							
						
							


						
						}

						
						
					}
				}
				

			
	}
		

		//TimeRanges
setInterval( demo , 100);
function demo(){
var time = new Date();
var t =  time.toLocaleTimeString();
var d = time.toLocaleDateString();

var eh = document.getElementById("time2");
eh.innerHTML=d;

var h = document.getElementById("time");
h.innerHTML=t;


}
