function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA'; //\u25BA
	}
	else
	{
		medio.play();
		play.value='||';
	}
    
}
function accionReiniciar()
{
  //Usar propiedad .currentTime
  //Reproducir el vídeo
  //Cambiar el valor del botón a ||
  medio.currentTime=0;
  medio.play();
  play.value='||';
}
function accionRetrasar()
{
	//Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
  console.log(medio.currentTime);
  if (medio.currentTime==0) {
      alert("No se puede retrasar más");
  }else{
    medio.currentTime=medio.currentTime-5;
    medio.play();
    play.value='||';
  }
}
function accionAdelantar()
{
  //Contemplar que no existen valores mayores a medio.duration	
  if ((medio.currentTime+5)<medio.duration) {
      medio.currentTime=medio.currentTime+5;
  }else{
      alert("No se puede adelantar más")
  }
  console.log(medio.currentTime);
}
function accionSilenciar()
{
	//Utilizar medio.muted = true; o medio.muted = false;
    if(medio.muted==false){
        medio.muted=true;
        silenciar.value="escuchar";
    }else{
        medio.muted=false;
        silenciar.value="silenciar";
    }
}
function accionMasVolumen()
{
	//Contemplar que el valor máximo de volumen es 1
    if(medio.volume==1){
        alert("El volumen está al máximo");
    }else{
        medio.volume=(parseFloat(medio.volume)+0.1).toFixed(2);
        console.log(medio.volume);
    }
}
function accionMenosVolumen()
{
	//Contemplar que el valor mínimo de volumen es 0
    if(medio.volume==0){
        alert("El volumen está al mínimo");
    }else{
        medio.volume=(parseFloat(medio.volume)-0.1).toFixed(2);
        console.log(medio.volume);
    }
}

function iniciar() 
{
	
	medio=document.getElementById('medio');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);