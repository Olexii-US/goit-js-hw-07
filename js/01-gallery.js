import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery')

galleryBox.addEventListener('click', (event) => {
    event.preventDefault()
}    
)

const markupGallery = galleryItems.map((item) => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
    </div>`    
).join('')

galleryBox.innerHTML = markupGallery

const linkRef = document.querySelectorAll('.gallery__link')

linkRef.forEach(function (item) {
    item.addEventListener("click", (event) => {
    event.preventDefault();})
})





// galleryBox.innerHTML = ...htmlString

// /////
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   /////








