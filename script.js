
let songindex = 0;
let masterplay = document.getElementById('masterplay')
let myProgressBar = document.getElementById('myProgressBar')
let audioElement = new Audio('1.mp3');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName:"Let Me Love You", filePath:"./1.mp3", coverPath:"./1.jpg"},
    {songName:"closer", filePath:"./2.mp3", coverPath:"./2.jpg"},
    {songName:"Let Me Down Slowly", filePath:"./3.mp3", coverPath:"./3.jpg"},
    {songName:"Lean On", filePath:"./4.mp3", coverPath:"./4.jpg"},
    {songName:"Believers", filePath:"./5.mp3", coverPath:"./5.jpg"},
    {songName:"Aai Nai", filePath:"./6.mp3", coverPath:"./6.jpg"},
    {songName:"Ambarsariya", filePath:"./7.mp3", coverPath:"./7.jpg"},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

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
const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `./${songindex+1}.mp3`;
        masterSongName.innerText=songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex = 6;
    }
    else{
        songindex -=1;
    }
    audioElement.src = `./${songindex+1}.mp3`;
    masterSongName.innerText=songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=6){
        songindex = 0;
    }
    else{
        songindex +=1;
    }
        audioElement.src = `./${songindex+1}.mp3`;
        masterSongName.innerText=songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})