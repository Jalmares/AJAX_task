// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
'use strict';
/* old way
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


 */
const getFetchData = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.text();
        document.querySelector('ul').innerHTML = result;
        console.log(result)
    }catch (e) {
        console.log(e)
    }
};

getFetchData('images.html');
