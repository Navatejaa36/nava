// console.log('Welcome to Spotify');
// //initialize the variables
// let songIIndex=0;
// let audioElement=new Audio('songs/despacito.mp3');
// let masterPlay=document.getElementById('masterPlay');//this is the id that connects to play/pause button 
// let myprogressbar=document.getElementById('myprogressbar');
// let gif=document.getElementById('gif');
// let songItems=Array.from(document.getElementsByClassName('songItem'));

// let songs=[
//     {songName:"Despacito - Luis Fonsi" ,filePath:"songs/despacito.mp3",coverPath:"images/despicito.jpg"},
//     {songName:"Dheera Dheera - Ravi Basrur" ,filePath:"songs/dheera.mp3",coverPath:"images/kgf.jpg"},
//     {songName:"Ranvijay's Entry - by A.R. Rahman, Threeory Band" ,filePath:"songs/entryran.mp3",coverPath:"images/animal.jpg"},
//     {songName:"Evarevaro - Vishal Mishra, Raj Shekhar" ,filePath:"songs/evarevaro.mp3",coverPath:"images/animal.jpg"},
//     {songName:"Hello Rammante -  Devan Ekambaram" ,filePath:"songs/hello.mp3",coverPath:"images/orange.jpg"},
//     {songName:"Kurchi Madathapetti - Thaman S" ,filePath:"songs/kurchi.mp3",coverPath:"images/karam.jpg"},
//     {songName:"Life Of Ram - Pradeep Kumar" ,filePath:"songs/lifeofram.mp3",coverPath:"images/jaanu.jpg"},
//     {songName:"Prathikadalo - Ravi Basrur" ,filePath:"songs/prathikadalo.mp3",coverPath:"images/salaar.jpg"},
//     {songName:"Sound Of  Salaar - Ravi Basrur" ,filePath:"songs/salaar.mp3",coverPath:"images/sound.jpg"},
//     {songName:"Sandeham Ledhu -  Kalyani Malik, Sunitha" ,filePath:"songs/sandeham.mp3",coverPath:"images/oohalu.jpg"},
    
    
// ]
// songItems.forEach((element, i)=>{
//     element.getElementsByTagName("img")[0].src=songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText=songs[i].songName
// })

// // audioElement.play(); plays when its not commented

// //handle play/pause click
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused ||audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         gif.style.opacity=1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-circle-pause');
//         masterPlay.classList.add('fa-circle-play')
//         gif.style.opacity=0;
//     }
// });
// //listen to events

// // listen to events
// audioElement.addEventListener('timeupdate', () => {
//     // update seekbar
//     progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);//this increments the value of seekbar
//     myprogressbar.value = progress;

// });

// myprogressbar.addEventListener('change',()=>{
//     audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
// });

// // const makeAllPlays=()=>{
// //     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
// //         element.classList.remove('fa-circle-pause');
// //         element.classList.add('fa-circle-play');
// //     })
// // }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{//e means which icon its clicked
//         makeAllPlays();
//         const index = parseInt(e.target.id); 
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.src = `songs/${index}.mp3`; 
//         audioElement.currentTime=0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//     })
// })



