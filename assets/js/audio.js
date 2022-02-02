function audio1(){
    btn = document.getElementById("audio1").addEventListener("click", function(e){
       var reproducir = new Audio();
       reproducir.src="assets/audio/transport-00110.mp3" 
       reproducir.play();
    },false);
}

function audio2(){
    btn = document.getElementById("audio2").addEventListener("click", function(e){
       var reproducir = new Audio();
       reproducir.src="assets/audio/transport-00048.wav" 
       reproducir.play();
    },false);
}

function audio3(){
    btn = document.getElementById("audio3").addEventListener("click", function(e){
       var reproducir = new Audio();
       reproducir.src="assets/audio/transport-00003.mp3" 
       reproducir.play();
    },false);
}

function audio4(){
    btn = document.getElementById("audio4").addEventListener("click", function(e){
       var reproducir = new Audio();
       reproducir.src="assets/audio/transport-00039.mp3" 
       reproducir.play();
    },false);
}

window.addEventListener('load', audio1, false);
window.addEventListener('load', audio2, false);
window.addEventListener('load', audio3, false);
window.addEventListener('load', audio4, false);
