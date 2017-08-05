console.log('Loaded!');


var element = document.getElementById("main");
element.innerHTML = "New Value";

var image = document.getElementById("madi");
var margin = 0;
function moveRight(){
    margin = margin + 10;
    image.style.marginRight = margin + 'px';
}
image.onclick = function() {
    var interval = setInterval(moveRight,100);
    //image.style.marginLeft = '110px';
};