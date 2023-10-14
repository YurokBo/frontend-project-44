import gameControl from '../index.js';
import getRandomNumber from '../helpers.js';

const generateProgression = ({
  startValue, length, range, hiddenIndex,
}) => {
  const progression = [];
  let currentValue = startValue;
  let hiddenValue;

  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      hiddenValue = currentValue;
      progression.push('..');
    } else {
      progression.push(currentValue);
    }

    currentValue += range;
  }

  return { hiddenValue, progression };
};

const generateRound = () => {
  const length = getRandomNumber({ min: 5, max: 6 });
  const startValue = getRandomNumber({ min: 1, max: 101 });
  const range = getRandomNumber({ min: 10, max: 10 });
  const hiddenIndex = getRandomNumber({ min: 0, max: length });

  const { hiddenValue, progression } = generateProgression({
    startValue, length, range, hiddenIndex,
  });

  return {
    question: progression.join(' '),
    correctAnswer: hiddenValue.toString(),
  };
};

export default function startBrainProgression() {
  gameControl({
    gameQuestion: 'What number is missing in the progression?',
    generateRound,
  });
}
