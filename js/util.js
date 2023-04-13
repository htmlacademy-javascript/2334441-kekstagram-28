const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function checkStringLength(string, maxLength) {
  return (string.length <= maxLength);
}

checkStringLength('проверяемая строка', 20);

const isEscapeKey = (evt) => evt.key === 'Escape';

function checkSameSubstring (value) {
  const array = value.toLowerCase().split(/(\s+)/).filter((e) => e.trim().length > 0);
  return array.some((e, i, arr) => arr.indexOf(e) !== i);
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle(callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

const getRandomNumsArray = (count, maxNum = count) => {
  const newLists = [];
  let newId = getRandomInteger(1, maxNum);

  while (newLists.length < count) {
    if (newLists.includes(newId)) {
      newId = getRandomInteger(1, maxNum);
    } else {
      newLists.push(newId);
    }
  }

  return newLists;
};

export { getRandomInteger, getRandomArrayElement, isEscapeKey,
  checkStringLength, checkSameSubstring, showAlert, debounce, throttle,
  getRandomNumsArray };
