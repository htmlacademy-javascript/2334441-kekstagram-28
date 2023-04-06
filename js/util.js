import {PHOTOS_COUNT, MIN_LIKES, MAX_LIKES, MESSAGES} from './constants.js';
import {USERS, DESCRIPTIONS, DIFFERENT_COMMENTS} from './constants.js';

let lastGeneratedId = 0;
export const generatedId = () => {
  if (lastGeneratedId < PHOTOS_COUNT) {
    lastGeneratedId += 1;
  } else {
    lastGeneratedId = lastGeneratedId - PHOTOS_COUNT + 1;
  }
  return lastGeneratedId;
};

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export const createComment = () => ({
  id : generatedId() ,
  avatar :`img/avatar-${getRandomInteger(1, 6)}.svg`,
  message : getRandomArrayElement(MESSAGES),
  name : getRandomArrayElement(USERS)
});


export const similarComments = Array.from({length: DIFFERENT_COMMENTS}, createComment);

export const createPhoto = () => ({
  id : generatedId(),
  url: `photos/${generatedId()}.jpg`,
  likes : getRandomInteger(MIN_LIKES, MAX_LIKES),
  description : getRandomArrayElement(DESCRIPTIONS),
  comments : similarComments[lastGeneratedId - 1]
});

export const similarPhotos = Array.from({length:PHOTOS_COUNT}, createPhoto);
export {lastGeneratedId};
