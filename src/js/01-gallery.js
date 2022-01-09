import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const divRef = document.querySelector('.gallery');

const markupRender = items => {
    return items.map(item => `
    
  <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
`).join('');
};

const markup = markupRender(galleryItems);

divRef.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
