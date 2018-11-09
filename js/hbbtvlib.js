function page1(){
  var appManager = document.getElementById("oipfAppMan").getOwnerApplication(document);

  appManager.show();

  $('#page2').hide();
  $('#page3').hide();
  $('#blueButton').hide();
  initialTV();
  $('#redButton').show(0).delay(10000).hide(0).delay(5000).show(0).delay(5000).hide(0).delay(60000).show(0).delay(5000).hide(0);
};

function page2(){

    $('#page1').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page2').show();
    document.getElementById('random').innerHTML = randomNumber();
};

function randomNumber(){
    return Math.floor(Math.random() * (10000 - 1000)) + 1000;
};

function page3(){

    $('#pageInit').hide();
    $('#page4').hide();
    $('#page3').show();
    document.getElementById("video1").style.backgroundColor = "yellow";
    document.getElementById("video2").style.backgroundColor = "white";
    document.getElementById("video3").style.backgroundColor = "white";
    document.getElementById("video4").style.backgroundColor = "white";
    document.getElementById("video5").style.backgroundColor = "white";

    for(i = 1; i < 6; i++){
        document.getElementById('imgYoutube' + i).src = "./img/youtube.png";
        document.getElementById('imgYoutube' + i).style.height = "80px";
        document.getElementById('imgYoutube' + i).style.width= "100px";
    }

};

function readJson() {

    $.getJSON("./json/videos.json", function(videos) {
        
        for(i = 1; i < 6; i++){
            document.getElementById("album" + i).innerHTML = "Name: " + videos.videos[i].album;
            document.getElementById("artist" + i).innerHTML = "Artist: " + videos.videos[i].artist;
        }

        document.getElementById("album").innerHTML = "Name: " + videos.videos[1].album;
        document.getElementById("artist").innerHTML = "Artist: " + videos.videos[1].artist;
        document.getElementById("views").innerHTML = "Views: " + videos.videos[1].visualizations;
        document.getElementById("description").innerHTML = "Description: " + videos.videos[1].description;

    });

    $.getJSON("./json/users.json", function(users) {
        
        for(i = 1; i < 3; i++){
            document.getElementById("user"+ i).innerHTML = users.users[i-1].user;
        }

    });
};

function initialTV(){
    rep = document.getElementById("initTV");
    rep.type = "video/broadcast";
    rep.style.width = "1024px";
    rep.style.height = "648px";
    rep.innerHTML = "";
    rep.type = "video/mp4";
    rep.data = "./video/video1.mp4";
    rep.play();
}

function miniTV(){
    rep = document.getElementById("miniTV");
    rep.type = "video/broadcast";
    rep.style.width = "350px";
    rep.style.height = "230px";
}

function fullTV(){
    $('#page3').hide();
    $('#page4').show();
    rep = document.getElementById("fullTV");
    rep.type = "video/broadcast";
    rep.style.width = "1024px";
    rep.style.height = "648px";
    rep.innerHTML = "";
    rep.type = "video/mp4";
    rep.data = "http://ccma-tva-int-abertis-live.hls.adaptive.level3.net/int/ngrp:tv3_web/playlist.m3u8";
    rep.play();
    $('#blueButton').show(0).delay(5000).hide(0);
}