const PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg'
];

const MALE_FIRST_NAMES = [
  'Алексей',
  'Дмитрий',
  'Иван',
  'Михаил',
  'Николай',
  'Олег',
  'Павел',
  'Сергей',
  'Андрей',
  'Константин',
  'Владимир',
  'Юрий',
  'Георгий',
  'Артем',
  'Роман'
];

const FEMALE_FIRST_NAMES = [
  'Анна',
  'Елена',
  'Мария',
  'Наталья',
  'Ольга',
  'Татьяна',
  'Екатерина',
  'Ирина',
  'Лариса',
  'Светлана',
  'Александра',
  'Вероника'
];

const MALE_LAST_NAMES = [
  'Иванов',
  'Петров',
  'Сидоров',
  'Смирнов',
  'Кузнецов',
  'Новиков',
  'Федоров',
  'Морозов',
  'Васильев',
  'Алексеев',
  'Лебедев',
  'Козлов',
  'Никитин',
  'Андреев',
  'Григорьев'
];

const FEMALE_LAST_NAMES = [
  'Иванова',
  'Петрова',
  'Сидорова',
  'Смирнова',
  'Кузнецова',
  'Новикова',
  'Федорова',
  'Морозова',
  'Васильева',
  'Алексеева',
  'Лебедева',
  'Козлова',
  'Никитина',
  'Андреева',
  'Григорьева'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Золотистый закат над океаном, отражения на воде.',
  'Молодая пара счастлива на пляже в теплый день.',
  'Живописный горный пейзаж в солнечный день.',
  'Дети играют в парке на качелях и горке.',
  'Впечатляющий городской вид с высоты птичьего полета.',
  'Романтическая прогулка вдоль озера на закате.',
  'Заброшенный замок в тумане.',
  'Бегущая лошадь на прерии в полном галопе.',
  'Природный каменный мост через горную реку.',
  'Красивые цветы в вазе на фоне белой стены.',
  'Молодая женщина в платье на пляже перед океаном.',
  'Солнечный день на ферме с животными и зелеными полями.',
  'Река, бьющаяся о скалы в каньоне.',
  'Красивая бабочка с зелеными крыльями на розовом цветке.',
  'Желтые подсолнухи на фоне голубого неба и белых облаков.'
];
const DIFFERENT_COMMENTS = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const users = [];

for (let i = 0; i < 25; i++) {
  let name;
  let lastName;

  if ((i + 3) % 3 === 0) {
    name = MALE_FIRST_NAMES[getRandomInteger(0, MALE_FIRST_NAMES.length - 1)];
    lastName = MALE_LAST_NAMES[getRandomInteger(0, MALE_LAST_NAMES.length - 1)];
  } else {
    name = FEMALE_FIRST_NAMES[getRandomInteger(0,FEMALE_FIRST_NAMES.length - 1)];
    lastName = FEMALE_LAST_NAMES[getRandomInteger(0, FEMALE_LAST_NAMES.length - 1)];
  }

  users.push(`${name} ${lastName}`);
}

let lastGeneratedPhotoId = 0;
const generatePhotoId = () => {
  lastGeneratedPhotoId += 1;
  return lastGeneratedPhotoId;
};

let lastGeneratedId = 0;
const generateId = () => {
  lastGeneratedId += 1;
  return lastGeneratedId;
};

const createComments = () => ({
  id : generateId() ,
  avatar : getRandomArrayElement(AVATARS),
  message : getRandomArrayElement(MESSAGE),
  name : getRandomArrayElement(users),
});

const similarComments = Array.from({length: DIFFERENT_COMMENTS}, createComments);
const createPhotos = () => ({
  URL: `photos/${generatePhotoId()}.jpg`,
  likes : getRandomInteger(MIN_LIKES, MAX_LIKES),
  description : getRandomArrayElement(DESCRIPTION),
});

const similarPhotos = Array.from({length: PHOTOS_COUNT}, createPhotos);
