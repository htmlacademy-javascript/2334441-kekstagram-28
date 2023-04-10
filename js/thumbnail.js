import { similarPhotos } from './util.js';

const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

export const picsContainer = document.querySelector('.pictures');

const posts = similarPhotos();


posts.forEach(({url, comments, likes }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  picsContainer.appendChild(thumbnail);
});

export { posts };
