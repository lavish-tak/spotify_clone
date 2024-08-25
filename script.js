
let songindex =0;
let masterplay = document.getElementById('masterplay')
let myProgressBar = document.getElementById('myProgressBar')
let audioElement = new Audio('1.mp3');
let gif = document.getElementById('gif');


let songs = [
    {songName:"Let Me Love You", filePath:"1.mp3", coverPath:""},
    {songName:"closer", filePath:"2.mp3", coverPath:""},
    {songName:"Let Me Down Slowly", filePath:"3.mp3", coverPath:""},
    {songName:"Lean On", filePath:"4.mp3", coverPath:""},
    {songName:"Believers", filePath:"5.mp3", coverPath:""},
    {songName:"Aai Nai", filePath:"6.mp3", coverPath:""},
    {songName:"Ambarsariya", filePath:"7.mp3", coverPath:""},
]

//Handle Play/Pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

