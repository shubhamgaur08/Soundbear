console.log("welcome to the soundbear");
let songIndex=0;
let audioelement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songInfo=document.getElementById('songInfo');

let songs=[
    {songsName: "Maiyya mainu", filePath:"songs/1.mp3", coverPath:"covers/cover1.jpg"},
    {songsName: "Channa Ve", filePath:"songs/2.mp3", coverPath:"covers/cover2.jpg"},
    {songsName: "Maan Meri jaan", filePath:"songs/3.mp3", coverPath:"covers/cover3.jpg"},
    {songsName:"Tum Jo Milo", filePath:"songs/4.mp3", coverPath:"covers/cover4.jpg"},
    {songsName: "Apna Bana Le", filePath:"songs/5.mp3", coverPath:"covers/cover5.jpg"},
    {songsName: "Rasiya", filePath:"songs/6.mp3", coverPath:"covers/cover6.jpg"},
    {songsName: "Haaniya Ve", filePath:"songs/7.mp3", coverPath:"covers/cover7.jpg"},
    {songsName: "Tujhse Pyaar Karta Hoon", filePath:"songs/8.mp3", coverPath:"covers/cover8.jpg"},
    {songsName: "Ghodey Pe Sawaar", filePath:"songs/9.mp3", coverPath:"covers/cover9.jpg"},
    {songsName: "Sukoon the gazals", filePath:"songs/10.mp3", coverPath:"covers/cover10.jpg"},
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songsName;
});



// audioelement.play();
// for handle pause and play click
masterPlay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//time and progressbar
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime=myProgressBar.value*audioelement.duration/100;
})







Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src=`songs/${index}.mp3`;
        songIndex=e.target.id;
        songInfo.innerText = songs[songIndex-1].songsName;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
songIndex=index;
    })
});

const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
let songName=document.getElementsByClassName('songName');

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 1
    }
    else{
        songIndex += 1;
    }
    audioelement.src = `songs/${songIndex}.mp3`;
    songInfo.innerText = songs[songIndex-1].songsName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    console.log(songIndex);

})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 1;
    }
    else{
        songIndex =songIndex-1;
        
    }
    audioelement.src = `songs/${songIndex}.mp3`;
    songInfo.innerText = songs[songIndex-1].songsName;//this is song name array
    audioelement.currentTime = 0;
    audioelement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    console.log(songIndex);
})