// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

export const list = document.querySelector('.gallery');

export function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
    .join('');
}
export const cardsGalleryMarkUp = createImgGallery(galleryItems);
list.insertAdjacentHTML('afterbegin', cardsGalleryMarkUp);

new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});