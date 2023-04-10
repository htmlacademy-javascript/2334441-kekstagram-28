/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import {isEscapeKey} from './util.js';
import { posts } from './thumbnail.js';

const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const listComments = bigPicture.querySelector('.social__comments');
const elementListCopy = listComments.querySelector('li').cloneNode(true);
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

const renderNewComment = (arrayComment) => {
  listComments.innerHTML = '';
  const commentFragment = document.createDocumentFragment();

  arrayComment.forEach(({avatar, name, message}) => {
    const comment = elementListCopy.cloneNode(true);

    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    commentFragment.append(comment);
  });
  listComments.append(commentFragment);
};

const renderBigPicture = ({url, likes, comments, description}) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  renderNewComment(comments);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  bigPicture.querySelector('.cancel').removeEventListener('click', onMouseClose);
};

const onMouseClose = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

export const openBigPicture = (picture) => {
  renderBigPicture(picture);
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');

  // closeButton.addEventListener('click', closeBigPicture);
  // document.addEventListener('keydown', onEscape);
  document.addEventListener('keydown', onDocumentKeydown);
  bigPicture.querySelector('.cancel').addEventListener('click', onMouseClose);
};

pictures.addEventListener('click', (evt) => {

  if(evt.target.closest('.picture')) {
    const url = String(evt.target.src).slice(String(evt.target.src).indexOf('photos'));
    const thisPost = posts.filter((post) => post.url === url)[0];
    openBigPicture(thisPost);
  }
});
