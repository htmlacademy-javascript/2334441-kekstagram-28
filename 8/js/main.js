import './util.js';
import './full_image.js';
import './thumbnail.js';
import './constants.js';
import { similarPhotos } from './util.js';
import { renderCards } from './full_image.js';
import { PHOTOS_COUNT } from './constants.js';


renderCards(similarPhotos(PHOTOS_COUNT));
