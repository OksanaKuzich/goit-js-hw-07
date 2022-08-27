import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createMarkUp(galleryItems) {
  return galleryItems
    .map((image) => {
      return `
<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`;
    })
    .join("");
}

const createMarkUpGallery = createMarkUp(galleryItems);
const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = createMarkUpGallery;

galleryEl.addEventListener("click", onElementClick);

function onElementClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
}

new SimpleLightbox(".gallery__item", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
