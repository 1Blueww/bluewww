var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Telegram Desktop/olya.jpg') {
      myImage.setAttribute ('src','Telegram Desktop/olya2.jpg');
    } else {
      myImage.setAttribute ('src','Telegram Desktop/olya.jpg');
    }
}