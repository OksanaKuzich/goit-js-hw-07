import { galleryItems } from "./gallery-items.js";

// Change code below this line

function createMarkUp(galleryItems) {
  return galleryItems
    .map((image) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`;
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

  const instance = basicLightbox.create(
    `
<img src="${event.target.dataset.source}" width="800" height="600" alt="${event.target.alt}">
`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeByEscape);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeByEscape);
      },
    }
  );

  function closeByEscape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
