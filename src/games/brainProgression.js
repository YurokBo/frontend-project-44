import { getRandomNumber, gameControl } from '../index.js';

const generateRandomProgression = () => {
  const progressionLength = getRandomNumber({ min: 5, max: 6 });
  const progressionStartValue = getRandomNumber({ min: 1, max: 101 });
  const progressionRange = getRandomNumber({ min: 10, max: 10 });
  const hiddenIndex = getRandomNumber({ min: 0, max: progressionLength });
  const progression = [];
  let currentValue = progressionStartValue;
  let correctResult;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenIndex) {
      correctResult = currentValue;
      progression.push('..');
    } else {
      progression.push(currentValue);
    }

    currentValue += progressionRange;
  }

  return { correctResult, progression };
};

const generateQuestionAndAnswer = () => {
  const { correctResult, progression } = generateRandomProgression();
  const generateQuestion = progression;
  const generateAnswer = correctResult;

  return { generateQuestion, generateAnswer };
};

export default function startBrainProgression() {
  gameControl({
    gameDescription: 'What number is missing in the progression?',
    generateQuestionAndAnswer,
  });
}
