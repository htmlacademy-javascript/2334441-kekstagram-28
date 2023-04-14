import { originalData } from './api.js';
import { renderPosts } from './create-miniatures.js';
import { getRandomNumsArray, debounce } from './util.js';

const imgFilters = document.querySelector('.img-filters');
const filtersBtns = imgFilters.querySelectorAll('.img-filters__button');

const RERENDER_DELAY = 501;
const COUNT_RENDER_RANDOM = 10;

const Filters = {
  ISDEFAULT: () => originalData,
  ISRANDOM: (arrays) => {
    const randomIds = getRandomNumsArray(COUNT_RENDER_RANDOM, arrays.length - 1);
    const newLists = [];

    randomIds.forEach((id) => {
      const newEntry = arrays.find((entry) => entry.id === id);
      newLists.push(newEntry);
    });
    return newLists;
  },
  ISDISCUSSED: (array) => array.slice().sort(compareCommentsTotal)
};

let currentFilter = Filters.ISDEFAULT;

const showFilters = () => imgFilters.classList.remove('img-filters--inactive');

function compareCommentsTotal (postA, postB) {
  return postB.comments.length - postA.comments.length;
}

const switсhCurrentFilter = (current) => {
  filtersBtns.forEach((btn) => {
    btn.classList.remove('img-filters__button--active');
  });
  current.classList.add('img-filters__button--active');
};

imgFilters.addEventListener('click', (evt) => {
  const currentBtn = evt.target.closest('[type="button"]');
  if (currentBtn) {
    const currentFilterName = evt.target.id.split('-')[1].toUpperCase();
    currentFilter = Filters[currentFilterName];
    switсhCurrentFilter(currentBtn);
    debounce(
      () => renderPosts(currentFilter(originalData)),
      RERENDER_DELAY,
    )();
  }
});

export { showFilters };
