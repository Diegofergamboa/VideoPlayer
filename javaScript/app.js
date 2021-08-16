
const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);


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


const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeUpdate', handletimeUpdate);
$progress.addEventListener('input',handleInput);

function handleLoaded () {
    $progress.max = $video.duration;
};
function handletimeUpdate () {
    $progress.value = $video.currentTime
}
function handleInput () {
    $video.currentTime = $progress.value ;
    console.log($progress.value) ;
};
