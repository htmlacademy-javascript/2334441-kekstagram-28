import {renderModal} from './modal_image.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content
  .querySelector('.picture');

const fragment = document.createDocumentFragment();
const renderCards = (photos) => {
  photos.forEach((photo) => {
    const cloneImage = pictureTemplate.cloneNode(true);
    cloneImage.querySelector('.picture__img').src = photo.url;
    cloneImage.querySelector('.picture__comments').textContent = photo.comments.length;
    cloneImage.querySelector('.picture__likes').textContent = photo.likes;
    cloneImage.dataset.thumbnailId = photo.id;
    fragment.append(cloneImage);
  }
  );
  picturesContainer.append(fragment);
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      evt.preventDefault();
      const index = photos.findIndex((element) => element.id === 1 * evt.target.closest('a').dataset.thumbnailId);
      renderModal(photos[index]);
    }

  });
};

export { renderCards };
