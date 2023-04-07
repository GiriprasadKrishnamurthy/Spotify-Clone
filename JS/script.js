console.log('Welcome to Spotify')
let songindex = 0;
let audio = new Audio('../IMG/Latha/4.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let masterPlay = document.getElementById('masterPlay');
let g = document.getElementById('playing2');

let songs = [

        { songName: "Kabhi Kushi", filePath: "../IMG/Latha/2.mp3" },
        { songName: "Lag Ja Gale", filePath: "../IMG/Latha/1.mp3" },
        { songName: "Ram Rathana Dhana Payo", filePath: "../IMG/Latha/3.M4A" },
        { songName: "Chhod De Sari Duniya", filePath: "../IMG/Latha/4.mp3" },
        { songName: "Bhai Bhatur", filePath: "../IMG/Latha/5.mp3" }
    ]
    //masterPlay is an element to which we are handling event with the help of listener
masterPlay.addEventListener('click', () => {

    if (masterPlay.classList.contains('fa-circle-pause')) {
        console.log('play')
        audio.play();
        g.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        console.log('pause');
        audio.pause();
        g.opacity = 0;
        makeAllSongsStop();
        console.log('pause');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
audio.addEventListener('timeupdate', () =>

    {
        myProgressBar.value = parseInt((audio.currentTime / audio.duration) * 100); //change in time of audio should be reflected in the progress bar
    })
myProgressBar.addEventListener('change', () => {
    console.log('Paused')
    audio.currentTime = myProgressBar.value * audio.duration / 100;
})

//to run directly from the song item list play button
const makeAllSongsStop = () => {
    //defining a function to stop all songs fully and then start required song
    Array.from(document.getElementsByClassName('song-item-play')).forEach((element) => { //means for each icon make if off or stop
        console.log('Yes');
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        // audio.currentTime = 0;
        // audio.pause(); //every element can have multiple classes
    })
}

Array.from(document.getElementsByClassName('song-item-play')).forEach((element) => //for each of the songs div check where the event is occuring

    {

        element.addEventListener('click', (e) => {
            if (element.classList.contains('fa-circle-pause')) {
                // element.classList.add('fa-circle-play');
                console.log('has pause')
                element.classList.remove('fa-circle-pause');
                element.classList.add('fa-circle-play');
                audio.pause();

                g.opacity = 0;
                let value = audio.currentTime;
                myProgressBar.value = value / audio.duration * 100;
                masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
            } else {

                // if (e.target.className == 'fa-circle-play') {
                makeAllSongsStop();
                //we are finding out the play button out of 5 which was clicked
                //e.target will return the element from the list of 5 songs whihc has been clicked
                songindex = parseInt(e.target.id);
                console.log(songindex + "");
                if (element.classList.contains('fa-circle-play')) {
                    element.classList.remove('fa-circle-play');
                    element.classList.add('fa-circle-pause');
                    masterPlay.classList.remove('fa-circle-play');
                    masterPlay.classList.add('fa-circle-pause');
                    // if (songindex == 4) {
                    // path = "../IMG/Latha/" + songindex + ".M4A";
                    // } else {
                    if (songindex == 3) {
                        let path = "../IMG/Latha/" + songindex + ".M4A";
                        audio.src = path;
                        audio.currentTime = 0;
                        audio.play();
                        g.opacity = 1;
                    } else {
                        let path = "../IMG/Latha/" + songindex + ".mp3";
                        audio.src = path;
                        audio.currentTime = 0;
                        audio.play();
                        g.opacity = 1;
                    }
                }


            }

        })
    })
let prev = document.getElementById('previous');
let next = document.getElementById('next');
prev.addEventListener('click', () => {

    console.log(songindex)
    if (songindex <= 1) {
        // let icon = document.getElementById(songindex);
        // let prev_icon = document.getElementById(songindex - 1);
        songindex = 0;
        // audio.play();
        // icon.classList.remove('fa-circle-play');
        // icon.classList.add('fa-circle-pause');

    } else {
        let icon = document.getElementById(songindex);
        let prev_icon = document.getElementById(songindex - 1);
        songindex -= 1;

        icon.classList.remove('fa-circle-pause');
        icon.classList.add('fa-circle-play');
        prev_icon.classList.remove('fa-circle-play');
        prev_icon.classList.add('fa-circle-pause');
    }
    if (songindex == 3) {
        let path = "../IMG/Latha/" + songindex + ".M4A";
        audio.src = path;
        console.log('songindex');
        audio.currentTime = 0;
        audio.play();
        // g.opacity = 1;
    } else {
        let path = "../IMG/Latha/" + songindex + ".mp3";
        audio.src = path;
        audio.currentTime = 0;
        audio.play();
        // g.opacity = 1;
    }
    // songindex = parseInt(e.target.id - 1);
})
next.addEventListener('click', () => {

    if (songindex == 5) {
        songindex = 5;
        // icon.classList.remove('fa-circle-play');
        // icon.classList.add('fa-circle-pause');
    } else {
        let icon = document.getElementById(songindex);
        let next_icon = document.getElementById(songindex + 1);
        songindex += 1;
        icon.classList.remove('fa-circle-pause');
        icon.classList.add('fa-circle-play');
        next_icon.classList.remove('fa-circle-play');
        next_icon.classList.add('fa-circle-pause');

    }
    if (songindex == 3) {
        let path = "../IMG/Latha/" + songindex + ".M4A";
        audio.src = path;
        console.log('songindex');
        audio.currentTime = 0;
        audio.play();
        // g.opacity = 1;
    } else {
        let path = "../IMG/Latha/" + songindex + ".mp3";
        audio.src = path;
        audio.currentTime = 0;
        audio.play();
        // g.opacity = 1;
    }
})