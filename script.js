// Array of image objects
const images = [
  { thumb: 'images/img1-thumb.jpg', hd: 'images/img1.jpg', caption: 'Caption 1' },
  { thumb: 'images/img2-thumb.jpg', hd: 'images/img2.jpg', caption: 'Caption 2' },
  { thumb: 'images/img3-thumb.jpg', hd: 'images/img3.jpg', caption: 'Caption 3' },
  { thumb: 'images/img4-thumb.jpg', hd: 'images/img4.jpg', caption: 'Caption 4' },
  { thumb: 'images/img5-thumb.jpg', hd: 'images/img5.jpg', caption: 'Caption 5' },
  { thumb: 'images/img6-thumb.jpg', hd: 'images/img6.jpg', caption: 'Caption 6' },
  { thumb: 'images/img7-thumb.jpg', hd: 'images/img7.jpg', caption: 'Caption 7' },
  { thumb: 'images/img8-thumb.jpg', hd: 'images/img8.jpg', caption: 'Caption 8' },
  { thumb: 'images/img9-thumb.jpg', hd: 'images/img9.jpg', caption: 'Caption 9' },
  { thumb: 'images/img10-thumb.jpg', hd: 'images/img10.jpg', caption: 'Caption 10' },
  { thumb: 'images/img11-thumb.jpg', hd: 'images/img11.jpg', caption: 'Caption 11' },
  { thumb: 'images/img12-thumb.jpg', hd: 'images/img12.jpg', caption: 'Caption 12' },
];

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const caption = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');

// Dynamically create gallery images
images.forEach((img, index) => {
  const imageElement = document.createElement('img');
  imageElement.src = img.thumb;
  imageElement.alt = img.caption;
  imageElement.dataset.hd = img.hd;
  imageElement.dataset.caption = img.caption;
  gallery.appendChild(imageElement);
});

// Event delegation: click on gallery images
gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    modal.classList.remove('hidden');
    modalImg.src = e.target.dataset.hd;
    caption.textContent = e.target.dataset.caption;
  }
});

// Close modal when clicking X
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalImg.src = '';
  caption.textContent = '';
});

// Close modal when clicking on the modal image itself
modalImg.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalImg.src = '';
  caption.textContent = '';
});
