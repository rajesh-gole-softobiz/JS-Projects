var i=0;
var images = ['1.jpg','2.jpg','3.jpg'];
var time = 3000;

function changeImg() {
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changeImg()",time);
}


window.onload = changeImg;