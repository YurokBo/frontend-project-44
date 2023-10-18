import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const generateProgression = ({ startValue, length, range }) => {
  const progression = [];
  let currentValue = startValue;

  for (let i = 0; i < length; i += 1) {
    progression.push(currentValue);
    currentValue += range;
  }

  return progression;
};

const generateRound = () => {
  const length = getRandomNumber({ min: 5, max: 10 });
  const startValue = getRandomNumber({ min: 1, max: 100 });
  const range = getRandomNumber({ min: 1, max: 20 });
  const progression = generateProgression({
    startValue, length, range,
  });
  const index = getRandomNumber({ min: 0, max: progression.length - 1 });

  const answer = progression[index].toString();
  progression[index] = '..';

  return {
    question: progression.join(' '),
    answer,
  };
};

export default function startProgression() {
  runEngine({
    gameQuestion: 'What number is missing in the progression?',
    generateRound,
  });
}
