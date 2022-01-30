import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryMarkup(galleryItems) { 
  return galleryItems.map(({preview, original, description}) => { 
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  }).join('');
}


  galleryContainer.addEventListener('click',onImgClick);

function onImgClick(event) { 
  preventDefault();

  if (!event.target.contains('g_allery_item')) {
    return;
  };

  basicLightbox.create(`
		<img width="1400" height="900" src="${galleryItems.preview}">
	`).show()

  // console.log(galleryItems.original)
  };




