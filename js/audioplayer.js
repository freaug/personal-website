
"use strict";

    var state = 0;
    var aud = document.getElementById("myAudio");
    var vid = document.getElementById("myVideo");
    var pP = document.getElementById("playPause");

    var currentSong = document.getElementById("currentSong");   
    var currentVideo = document.getElementById("currentVideo");
// Song Id's
    var RSN = document.getElementById("RSN");
    var Trevize = document.getElementById("Trevize");
    var Tempus = document.getElementById("Tempus");
    var Tabula = document.getElementById("Tabula");
    var Sequenza = document.getElementById("Sequenza");
    var chatter = document.getElementById("chatter");
    var siam = document.getElementById("siam");
// video Id's        
    var erium = document.getElementById("erium");
    var spaceShark = document.getElementById("spaceShark");
    var DDG = document.getElementById("DDG");
// Event Listeners
    RSN.addEventListener("click", myFunction);
    RSN.addEventListener("click", nameChange1);
    Trevize.addEventListener("click", myFunction1);
    Trevize.addEventListener("click", nameChange2);
    Tempus.addEventListener("click", myFunction2);
    Tempus.addEventListener("click", nameChange3);
    Tabula.addEventListener("click", myFunction3);
    Tabula.addEventListener("click", nameChange4);
    Sequenza.addEventListener("click", myFunction4);
    Sequenza.addEventListener("click", nameChange5);
    chatter.addEventListener("click", myFunction5);
    chatter.addEventListener("click", nameChange6);  
    siam.addEventListener("click", myFunction7);
    siam.addEventListener("click", nameChange8);
// video event listeners  
    erium.addEventListener("click", myFunction6);
    erium.addEventListener("click", nameChange7);
    spaceShark.addEventListener("click", myFunction8);
    spaceShark.addEventListener("click",nameChange9);
    DDG.addEventListener("click", myFunction9);
    DDG.addEventListener("click", nameChange10);
 // RSN       
    function myFunction(){
        aud.src = "audio/RSN.mp3";
        aud.play();
        state = 1;
        document.getElementById("playPause").className = "glyphicon glyphicon-pause";
    }   
    function nameChange1(){
        currentSong.innerHTML = "Current Song RSN";
    }
// Trevize
    function myFunction1(){
        aud.src = "audio/Trevize.mp3";
        aud.play();
        state = 1;
        document.getElementById("playPause").className = "glyphicon glyphicon-pause";

    }
    function nameChange2(){
        currentSong.innerHTML = "Current Song Trevize";
    }    
// Tempus
    function myFunction2(){
        aud.src = "audio/Tempus.mp3";
        aud.play();
        state = 1;
        document.getElementById("playPause").className = "glyphicon glyphicon-pause";
    }
    function nameChange3(){
        currentSong.innerHTML = "Current Song Tempus";
    }      
// Tabula      
    function myFunction3(){
        aud.src = "audio/Tabula.mp3";
        aud.play();
        state = 1;
        document.getElementById("playPause").className = "glyphicon glyphicon-pause";
    }
    function nameChange4(){
        currentSong.innerHTML = "Current Song Tabula";
    }
 // Sequenza       
    function myFunction4(){
        aud.src = "audio/Sequenza.mp3";
        aud.play();
        state = 1;
        document.getElementById("playPause").className = "glyphicon glyphicon-pause";
    }   
    function nameChange5(){
        currentSong.innerHTML = "Current Song Sequenza";
    }
// Chatter     
    function myFunction5(){
        aud.src = "audio/Chatter.mp3";
        aud.play();
        state = 1;
        document.getElementById("playPause").className = "glyphicon glyphicon-pause";
    }                 
    function nameChange6(){
        currentSong.innerHTML = "Current Song Chatter";
    }
// siam
    function myFunction7(){
        aud.src = "audio/siam.mp3";
        aud.play();
        state = 1;
        document.getElementById("playPause").className = "glyphicon glyphicon-pause";
    }
    function nameChange8(){
        currentSong.innerHTML = "Current Song Siam";
    }
        
// Erium
    function myFunction6(){
        vid.src = "video/erium.mov";
    }
    function nameChange7(){
        currentVideo.innerHTML = "Current Video Erium";
    }
// space shark
    function myFunction8(){
        vid.src = "video/spaceShark.mov";
    }
    function nameChange9(){
        currentVideo.innerHTML = "Current Video Space Shark";
    }
    // ddg   
    function myFunction9(){
        vid.src = "video/DDG.mov";
    }
    function nameChange10(){
        currentVideo.innerHTML = "Current Video DDG";
    }


$(document).ready(function(){      
    $("#playPause").click(function(){
        $(this).toggleClass("glyphicon-pause glyphicon-play");                 
        state = state + 1;
        console.log(state);
        
        if(state == 1){
            aud.play();
        } else if(state == 2){
            aud.pause();
            state = 0;
        };
    });
});
