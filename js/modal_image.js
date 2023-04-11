import { isEscapeKey } from './util.js';

const modal = document.querySelector('.big-picture');
const modalImage = modal.querySelector('.big-picture__img img');
const modalLikes = modal.querySelector('.likes-count');
const modalCommentsCount = modal.querySelector('.social__comment-count');
const modalCommentsList = modal.querySelector('.social__comments');
const modalCommentItem = modal.querySelector('.social__comment');
const buttonCancel = modal.querySelector('.big-picture__cancel');
const buttonLoader = modal.querySelector('.social__comments-loader');
const body = document.body;

const COMMENTS_STEP = 5;
const commentsList = [];
let commentsCountShown = 0;
let commentsTotal = 0;

buttonCancel.addEventListener('click', () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

const showModal = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
};

const renderComment = (comment) => {
  const cloneComment = modalCommentItem.cloneNode(true);
  cloneComment.querySelector('.social__picture').src = comment.avatar;
  cloneComment.querySelector('.social__text').textContent = comment.message;
  cloneComment.querySelector('.social__picture').alt = comment.name;
  commentsCountShown++;
  return cloneComment;
};

const renderModalCommentsCount = () => {
  modalCommentsCount.innerHTML = `${commentsCountShown} из <span class="comments-count">${commentsTotal}</span> комментариев`;
};

const renderLoadButton = () => {
  if(commentsCountShown < commentsTotal) {
    buttonLoader.classList.remove('hidden');
  } else {
    buttonLoader.classList.add('hidden');
  }
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();

  commentsList.splice(0, COMMENTS_STEP).forEach((comment) => {
    fragment.append(renderComment(comment));
  });
  modalCommentsList.append(fragment);

  renderModalCommentsCount();
  renderLoadButton();
};

const renderModalImage = (photo) => {
  modalImage.src = photo.url;
};

const renderModalLikes = (photo) => {
  modalLikes.textContent = photo.likes;
};

buttonLoader.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderComments();
});

const renderModal = (photo) => {
  showModal();
  commentsTotal = photo.comments.length;
  commentsCountShown = 0;
  renderModalImage(photo);
  renderModalLikes(photo);
  commentsList.push(...photo.comments.slice());
  modalCommentsList.innerHTML = '';
  renderComments();
};

export {renderModal};
