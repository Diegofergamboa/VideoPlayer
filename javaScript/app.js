
const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$pause.hidden = true
// Botones para play, pausa, adelantar y, atrasar 10 minutos 

function handlePlay () {
    $video.play()
    $play.hidden = true
    $pause.hidden = false   
    console.log('Click on play!')
};

function handlePause () {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('Click on pause!')
}

function handleBackward () {
    $video.currentTime -= 10 ;
    console.log('Atrasaste 10 segundos el video'+ $video.currentTime);
}

function handleForward () {
    $video.currentTime += 10 ;
    console.log('Adelantaste 10 segundos el video' + $video.currentTime);
}

/*
El evento loadedmetadata se produce cuando se ha cargado los metadatos para el audio / vídeo especificado.
Los metadatos para audio / vídeo se compone de: la duración, las dimensiones (vídeo) y pistas de texto.
*/


const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded);
/*
El evento loadedmetadata se produce cuando se ha cargado los metadatos para el audio / vídeo especificado.
Los metadatos para audio / vídeo se compone de: la duración, las dimensiones (vídeo) y pistas de texto.
*/
$video.addEventListener('timeupdate', handletimeUpdate);
// El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto. 
$progress.addEventListener('input',handleInput);

function handleLoaded () {
    $progress.max = $video.duration;
    console.log(`El video está cargado y, tiene una duración de: ${$progress.max}`)
};
function handletimeUpdate () {
    $progress.value = $video.currentTime; //Aqui agregué el valor del tiempo del video en la barrita de reproducción
};
function handleInput () {
    $video.currentTime = $progress.value ; //Aquí estoy agregando el valor del tiempo actual a mi barrita de progreso
    console.log($progress.value) ; //Valor de la barrita.
};
