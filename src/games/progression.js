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
  const index = getRandomNumber({ min: 0, max: length });
  const progression = generateProgression({
    startValue, length, range,
  });

  const answer = progression[index - 1].toString();
  progression.splice(index - 1, 1, '..');

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
