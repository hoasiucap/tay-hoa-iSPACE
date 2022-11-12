var menu_music = document.getElementById("menu_music");
var menu_poem = document.getElementById("menu_poem");
var menu_home = document.getElementById('menu_home');
const music = document.querySelector('.music');
const wrap_present = document.querySelector('.wrap-present');
const card_poem = document.querySelector('.card_poem');
const active = document.querySelector('.active');
const card_res = document.querySelector('#card');


const height = window.innerHeight;

// window width
const width = window.innerWidth;

if (width < 1281) {
    music.classList.add('display_none');
    card_poem.classList.add('display_none');
}
console.log(height, width); // 711 1440

menu_home.onclick = function() {
    card_res.classList.remove('display_none');

    music.classList.add('display_none');
    card_poem.classList.add('display_none');
    wrap_present.classList.remove('display_none');
}

menu_poem.onclick = function() {
    card_res.classList.add('display_none');
    music.classList.add('display_none');
    wrap_present.classList.add('display_none');
    card_poem.classList.remove('display_none');

}

menu_music.onclick = function() {
    card_res.classList.add('display_none');
    wrap_present.classList.add('display_none');
    music.classList.remove('display_none');
    card_poem.classList.add('display_none');

}