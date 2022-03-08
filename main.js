import './css/global.css';
import data from './assets/json/data.json';
import Masonry from 'masonry-layout';

const imageContainer = document.getElementById('imagecontainer');

data.forEach(element => {
    let image = document.createElement('img');
    image.src = element.path;
    image.alt = element.alt;
    image.classList.add('imagecontainer__item');
    image.classList.add('imagecontainer__item--' + (element.orientation ? element.orientation : 'portrait'));
    imageContainer.append(image);
});

var elem = document.querySelector('.imagecontainer');
var msnry = new Masonry(elem, {
    // options
    itemSelector: 'imagecontainer__item',
    columnWidth: 120,
    gutter: 10,
});

