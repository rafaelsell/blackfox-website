import './css/global.css';
import data from './assets/json/data.json';
import { JustifiedInfiniteGrid } from "@egjs/infinitegrid";

const imageContainer = document.getElementById('imagecontainer');

data.forEach(element => {
    let image = document.createElement('img');
    image.src = element.path;
    image.alt = element.alt;
    image.classList.add('imagecontainer__item');
    image.classList.add('imagecontainer__item--' + (element.orientation ? element.orientation : 'portrait'));
    imageContainer.append(image);
});

const ig = new JustifiedInfiniteGrid(".imagecontainer", {
    gap: 10,
    columnRange: 4,
});

ig.on("requestAppend", (e) => {
    const nextGroupKey = (+e.groupKey || 0) + 1;

    ig.append(getItems(nextGroupKey, 10), nextGroupKey);
});
ig.renderItems();

