import {openBigPicture} from './full_image.js';
import {renderThumbnails, container} from './thumbnail.js';

export const renderPictureModal = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnailPicture = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnailPicture) {
      return;
    }
    const picture = pictures.find (
      (item) => item.id === +thumbnailPicture.dataset.thumbnailId
    );
    openBigPicture(picture);
  });
  renderThumbnails(pictures);
};
