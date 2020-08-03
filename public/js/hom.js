// var time = 3000;
// var randomNumber = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);


// };

// // Logs something like 37
// var i = randomNumber(1, 36);
// window.onload = i;
// setTimeout(i, time);


// document.getElementById("showimg").style.backgroundImage = `url(pic${i}.jpg)`;

var i = Math.floor((Math.random() * 36) + 1); // Start point

var time = 5000;


// Change Image
function changeImg() {
    document.getElementById("showimg").style.backgroundImage = `url(pic${i}.jpg)`;
    if (i < 36) {
        i++;
    } else {
        i = 1;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;