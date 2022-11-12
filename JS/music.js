const title_music = document.querySelector('.title_music');
const author = document.querySelector('.author');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

const songList = [{
    path: "./MP3/nhac.mp3",
    songName: "Thầy đừng lo nữa",
    authorName: "Trung Quân",

}, {
    path: "./MP3/bai4hauhoang.mp3",
    songName: "Em yêu thầy cô ...",
    authorName: "Hậu Hoàng",

}, {
    path: "./MP3/cotuyetvoinhat.mp3",
    songName: "Cô tuyệt vời nhất",
    authorName: "Duy Khánh, Trung Ruồi, Minh Tít",

}, {
    path: "./MP3/thang5khongtrolai.mp3",
    songName: "Tháng 5 không trở lại",
    authorName: "The Wall Nutszz",
}, {
    path: "./MP3/lathuguithay.mp3",
    songName: "Lá thư gửi thầy",
    authorName: "Đông Nhi",
}, ];

let song_Playing = false;

// play song
function playSong() {
    song_Playing = true;
    audio.play();
    playPause.classList.add('active');
    // thay doi icon tam dung
    playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}
// pause song
function pauseSong() {
    song_Playing = false;
    audio.pause();
    playPause.classList.remove('active');
    // thay do icon tiep tuc chay
    playPause.innerHTML = '<ion-icon name="play"></ion-icon>';

}
// play or pause song on click
playPause.addEventListener("click", () => (song_Playing ? pauseSong() : playSong()));

// load song

function loadSong(songList) {
    title_music.textContent = songList.songName;
    audio.src = songList.path;
    author.textContent = songList.authorName;
}
// current song
let i = 0;

// on load - select first song from song list
loadSong(songList[i])



// previous song
function prevSong() {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i])
    playSong();
}
prev.addEventListener("click", prevSong);



// next song
function nextSong() {
    i++;
    if (i > songList.length - 1) {
        i = 0;
    }
    loadSong(songList[i])
    playSong();
}
next.addEventListener("click", nextSong);