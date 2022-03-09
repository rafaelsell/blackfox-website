import './css/global.css';
import Zooming from 'zooming'
import data from './assets/json/data.json';
import { JustifiedInfiniteGrid } from "@egjs/infinitegrid";

const imageContainer = document.getElementById('imagecontainer');

data.forEach(element => {
    let image = document.createElement('img');
    image.src = element.path;
    image.alt = element.alt;
    image.classList.add('img-zoomable');
    image.classList.add('imagecontainer__item');
    image.classList.add('imagecontainer__item--' + (element.orientation ? element.orientation : 'portrait'));
    imageContainer.append(image);
});

const ig = new JustifiedInfiniteGrid(".imagecontainer", {
    gap: 10,
    columnRange: 4,
});

ig.renderItems();

let menuButton = document.getElementById('menu-button');
let menuIcon = document.getElementById('menu-icon');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('opened');
    if (menuButton.classList.contains('opened')) {
        menuIcon.classList.remove('chevron-down-outline');
        menuIcon.classList.add('chevron-up-outline');
    }
    else {
        menuIcon.classList.remove('chevron-up-outline');
        menuIcon.classList.add('chevron-down-outline');
    }
});

// zoom images
document.addEventListener('DOMContentLoaded', function () {
    const zooming = new Zooming({
        customSize: "90%",
    });
    zooming.config({
        bgColor: "#191E24",
        bgOpacity: 1,

    })
    zooming.listen('.img-zoomable');
})
