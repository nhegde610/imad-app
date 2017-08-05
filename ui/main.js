/*console.log('Loaded!');


var element = document.getElementById("main");
element.innerHTML = "New Value";

var image = document.getElementById("madi");
var margin = 0;
function moveRight(){
    margin = margin + 1;
    image.style.marginRight = margin + 'px';
}
image.onclick = function() {
    var interval = setInterval(moveRight,100);
    //image.style.marginLeft = '110px';
};*/
var button = document.getElementById("button");
button.onclick = function(){
  var counter = 0;
  
  counter = counter + 1;
  var count = document.getElementById("count");
  count.innerHTML = counter.toString();
};