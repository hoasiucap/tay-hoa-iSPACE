var to = 'Teachers';
var gift_url = './black.html';
var gift_image_url = './img/R.png';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

    var _giftLink,
        _giftImg;

    if (gift_url) {
        _giftLink = document.createElement("a");
        _giftLink.href = gift_url;
        _giftLink.target = "_blank";
        presentImage.appendChild(_giftLink);
    }

    if (gift_image_url) {
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if (_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }
    }

    present.addEventListener("click", function(e) {
        present.classList.toggle("open");
        document.getElementById('card').classList.add('card-show');
        squares[0].classList.add('active');
        squares[1].classList.add('active1')
        squares[2].classList.add('active2')
        squares[3].classList.add('active3')
        squares[4].classList.add('active6')
    }, false);



    nametag.innerText = to;
}

init();

// NEW
const squares = document.querySelectorAll('.container .square')

const card = document.querySelectorAll('#card');

card[card.length - 1].addEventListener('mouseenter', (e) => {
    console.log('oj');

    // squares[0].classList.add('active');
    // squares[1].classList.add('active1')
    // squares[2].classList.add('active2')
    // squares[3].classList.add('active3')
    // squares[4].classList.add('active6')
})