const galleryImageModal = document.querySelector('.gallery-image-modal');
const galleryBtClose = galleryImageModal.querySelector('.bt-close');

galleryImageModal.showModal();
galleryImageModal.addEventListener('click', () => {
  galleryImageModal.close();
})

const imgs = document.querySelectorAll('img');
let html = '';
imgs.forEach((imgs) => {
  imgs.addEventListener('click', () => {
    galleryImageModal.showModal();
    html = `<img src="${imgs.src}" alt="${imgs.alt}.jpg" style="width: 384px; height: 100%;">`;
    galleryImageModal.innerHTML = html;
  });
});