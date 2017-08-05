console.log('Loaded!');


var element = document.getElementById("main");
element.innerHTML = "New Value";

var image = document.getElementById("madi");
image.onclick = function() {
    image.style.marginLeft = "10";
}