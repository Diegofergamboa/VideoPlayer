// Que al darle click, haga el efecto de pequeño del mouse
/* Esto lo realicé en CSS directamente, primero colocnado la propiedad
de pointer:cursor y, con una pseudoclase, llamé al método de transformer,
con el cual le cambié la escala al dar click. */

// Que al darle click y Play, se pausen y activen.

// Que al darle click a pausa y a play, se cambien entre ellos 

const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);

function handlePlay () {
    $video.play()
    console.log('Click on play!')
};

function handlePause () {
    $video.pause()
    console.log('Click on pause!')
}

