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
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

'use strict';

const address = "images.json";
const ul = document.querySelector("ul");

function showImages() {
    try {
        fetch(address).then(function (result) {
            return result.json();
        }).then(function (json) {
            console.log(json);
            json.forEach(i => {
                const li = document.createElement("li");
                const figure = document.createElement("figure");
                const a = document.createElement("a");
                const img = document.createElement("img");
                const figCap = document.createElement("figcaption");
                const h3 = document.createElement("h3");
                a.setAttribute("href", `img/original/${i.mediaUrl}`);
                img.setAttribute("src", `img/thumbs/${i.mediaThumb}`);
                h3.innerText = i.mediaTitle;
                figCap.appendChild(h3);
                a.appendChild(img);
                figure.appendChild(a);
                figure.appendChild(figCap);
                li.appendChild(figure);
                ul.appendChild(li);
            });
        });
    }   catch (e) {
        console.log(e);
    }
}

showImages();