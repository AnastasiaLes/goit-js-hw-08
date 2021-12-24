// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import styles from 'simplelightbox/dist/simple-lightbox.min.css';

import SimpleLightbox from 'simplelightbox';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, description, original})=> 
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');

console.log(galleryMarkup);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    console.log('Yes)')
    const modal = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250'
    });
 
};

