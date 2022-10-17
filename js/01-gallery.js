import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery')

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

galleryBox.addEventListener('click', (event) => {
    if (event.target.nodeName !== 'IMG') {
        return
    }

    const instance = basicLightbox.create(`
        <img src=${event.target.dataset.source}>
    `)
    instance.show()

    window.addEventListener('keydown', escapeModalClose);

    function escapeModalClose(keyEvent) {
        if (keyEvent.code === 'Escape') {
        instance.close()
            console.log(keyEvent)
            window.removeEventListener('keydown', escapeModalClose)
        }
    }
})






