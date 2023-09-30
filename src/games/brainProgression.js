import readlineSync from 'readline-sync';
import { getUserName, greeting } from '../cli.js';
import {
  showQuestion,
  showWrongAnswerText,
  getRandomNumber,
} from '../index.js';

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

export default function startBrainProgressionGame() {
  const userName = getUserName();
  greeting(userName);
  console.log('What number is missing in the progression?');

  let i = 0;

  while (i < 3) {
    const { correctResult, progression } = generateRandomProgression();

    showQuestion(progression);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) !== correctResult) {
      showWrongAnswerText({ incorrectAnswer: answer, correctAnswer: correctResult, userName });
      return;
    }

    console.log('Correct!');

    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
}
