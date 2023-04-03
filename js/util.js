let lastGeneratedId = 0;
const GeneratedId = () => {
  if (lastGeneratedId < 25) {
    lastGeneratedId += 1;
  } else {
    lastGeneratedId = lastGeneratedId - 25 + 1;
  }
  return lastGeneratedId;
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger};
export {getRandomArrayElement};
export {GeneratedId};
export {lastGeneratedId};
