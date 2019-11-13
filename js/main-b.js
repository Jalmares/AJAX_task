// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// After the loop print the HTML into <ul> element using innerHTML.

'use strict';

const address = "images.json";
let html = "";

function showImages() {
    fetch(address).then(function (result) {
        return result.json();
    }).then(function (json) {
        console.log(json);

        json.forEach(i => {
           html += `
<li>
    <figure>
        <a href=img/original/${i.mediaUrl}><img src=img/thumbs/${i.mediaThumb}></a>
        <figcaption>
            <h3>${i.mediaTitle}</h3>
        </figcaption>
    </figure>
</li>`
        });
        document.querySelector("ul").innerHTML = html;
    });
}

showImages();



