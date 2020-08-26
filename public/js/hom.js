var i = Math.floor(Math.random() * 59 + 1); // Start point

var time = 10000;

// Change Image
function changeImg() {
    document.getElementById("showimg").style.backgroundImage = `url(pic${i}.jpg)`;
    if (i < 59) {
        i++;
    } else {
        i = 1;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;