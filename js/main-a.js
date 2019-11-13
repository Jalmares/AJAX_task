// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
'use strict';

const address = "images.html";

function showImages() {
    fetch(address).then(function (result) {
        return result.text();
    }).then(function (text) {
        console.log(text);
        document.querySelector("ul").innerHTML = text;
    });
}

showImages();
