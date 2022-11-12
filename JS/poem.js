var back_poem = document.querySelector('.back_poem');
var next_poem = document.querySelector('.next_poem');
const inside = document.querySelector('.inside');
const inside1 = document.querySelector('.inside1');

inside1.classList.add('none');
next_poem.onclick = function() {
    inside1.classList.remove('none');

}
back_poem.onclick = function() {
    inside1.classList.add('none');

}