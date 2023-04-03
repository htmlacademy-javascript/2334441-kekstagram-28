import {getRandomInteger} from './util.js';
import {getRandomArrayElement} from './util.js';
import {GeneratedId} from './util.js';
import {lastGeneratedId} from './util.js';
import {PHOTOS_COUNT} from './constants.js';
import {MIN_LIKES} from './constants.js';
import {MAX_LIKES} from './constants.js';
import {MESSAGES} from './constants.js';
import {DIFFERENT_COMMENTS} from './constants.js';
import {DESCRIPTIONS} from './constants.js';
import {USERS} from './constants.js';
import {AVATARS} from './constants.js';

const createComment = () => ({
  id : GeneratedId() ,
  avatar : getRandomArrayElement(AVATARS),
  message : getRandomArrayElement(MESSAGES),
  name : getRandomArrayElement(USERS)
});


const similarComments = Array.from({length: DIFFERENT_COMMENTS}, createComment);

const createPhoto = () => ({
  id : GeneratedId(),
  URL: `photos/${GeneratedId()}.jpg`,
  likes : getRandomInteger(MIN_LIKES, MAX_LIKES),
  description : getRandomArrayElement(DESCRIPTIONS),
  comments : similarComments[lastGeneratedId - 1]
});

const similarPhotos = Array.from({length:PHOTOS_COUNT}, createPhoto);

Array.isArray(similarPhotos);
Array.isArray(similarComments);
