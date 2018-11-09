window.onload = function(){

var actualpg = 0;
var pause = 0;
var menuVideo = 1;
var minLlista = 1;
var maxLlista = 5;

page1();
readJson();

document.addEventListener("keydown", function(e) {
    if (e.keyCode == VK_RED) {
        if( actualpg == 0){
            page2();
            actualpg = 1;
        }
    };
    e.preventDefault();
},false);

document.addEventListener("keydown", function(e) {
    if (e.keyCode == VK_ENTER && actualpg == 1) {   
        if(actualpg == 1){
            page3();
            miniTV();
            document.addEventListener("keyup", function(e){
                if(e.keyCode == VK_ENTER && actualpg == 1){
                    actualpg = 2;
                };
                e.preventDefault();
            },false);
        }
    };
    e.preventDefault();
},false);

document.addEventListener("keydown", function(e) {
    if(e.keyCode == VK_DOWN && actualpg == 2 && menuVideo < maxLlista){

        menuVideo++;
        document.getElementById("video" + (menuVideo-1)).style.backgroundColor = "white";
        document.getElementById("video" + (menuVideo)).style.backgroundColor = "yellow";

        $.getJSON("./json/videos.json", function(videos) {

            document.getElementById("album").innerHTML = "Name: " + videos.videos[menuVideo].album;
            document.getElementById("artist").innerHTML = "Artist: " + videos.videos[menuVideo].artist;
            document.getElementById("views").innerHTML = "Views: " + videos.videos[menuVideo].visualizations;
            document.getElementById("description").innerHTML = "Description: " + videos.videos[menuVideo].description;
        });
    }
    e.preventDefault();
},false);

document.addEventListener("keydown", function(e) {
    if(e.keyCode == VK_UP && actualpg == 2 && menuVideo > minLlista){

        menuVideo--;
        document.getElementById("video" + (menuVideo+1)).style.backgroundColor = "white";
        document.getElementById("video" + (menuVideo)).style.backgroundColor = "yellow";

        $.getJSON("./json/videos.json", function(videos) {

            document.getElementById("album").innerHTML = "Name: " + videos.videos[menuVideo].album;
            document.getElementById("artist").innerHTML = "Artist: " + videos.videos[menuVideo].artist;
            document.getElementById("views").innerHTML = "Views: " + videos.videos[menuVideo].visualizations;
            document.getElementById("description").innerHTML = "Description: " + videos.videos[menuVideo].description;
        });
    }
    e.preventDefault();
},false);

document.addEventListener("keydown", function(e) {
    if(e.keyCode == VK_BLUE){
        video = document.getElementById("miniTV");
        if (video.requestFullscreen) {
                  video.requestFullscreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.mozRequestFullScreen) {
              video.mozRequestFullScreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
          }
    
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
    };
        e.preventDefault();
},false);
    
document.addEventListener("keydown", function(e) {
    if(e.keyCode == VK_ENTER && actualpg == 2 ){
        document.getElementById("miniTV").innerHTML = "";
        document.getElementById("miniTV").type = "video/mp4";
        document.getElementById("miniTV").data = "./video/video" + (menuVideo + 1) + ".mp4";
        document.getElementById("miniTV").play();
    };
    e.preventDefault();
},false);

document.addEventListener("keydown", function(e) {
    if (e.keyCode==VK_GREEN && actualpg==2) {
        document.getElementById("miniTV").childNodes[0].pause();
        pause = 1;
    };
        e.preventDefault();
},false);

document.addEventListener("keydown", function(e) {
    if (e.keyCode==VK_YELLOW && actualpg==2) {
        document.getElementById("miniTV").stop();
    };
    e.preventDefault();
},false);

document.addEventListener("keydown", function(e) {
    if (e.keyCode==VK_RED && actualpg==2 && pause == 1) {
        document.getElementById("miniTV").play();
        pause = 0;
    };
        e.preventDefault();
    },false);

document.addEventListener("keydown", function(e) {
    if (e.keyCode== VK_0) {
        document.getElementById("oipfAppMan").getOwnerApplication(document).hide();
        document.getElementById("oipfAppMan").getOwnerApplication(document).destroyApplication();
    };
    e.preventDefault();
},false);

};