import { galleryItems } from "./gallery-items.js";
// Change code below this line

const myGallery = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

myGallery.insertAdjacentHTML("beforeend", galleryList);
myGallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(`
	<img src="${event.target.dataset.source}">
`);
  instance.show();
}
