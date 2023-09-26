import { getUserName, greeting } from '../cli.js';
import {
  askQuestion,
  congratulation,
  generateRandomProgression,
  getAnswer,
  showWrongAnswerText,
} from '../index.js';
import { STEPS } from '../utils/constants.js';

const userName = getUserName();
greeting(userName);
console.log('What number is missing in the progression?');

export default function startBrainProgression() {
  let i = 0;

  while (i < STEPS) {
    const { correctResult, progression } = generateRandomProgression();
    askQuestion(progression);
    const answer = getAnswer({ question: 'Your answer' });

    if (Number(answer) !== correctResult) {
      showWrongAnswerText({ incorrectAnswer: answer, correctAnswer: correctResult, userName });
      return;
    }

    console.log('Correct!');

    i += 1;
  }

  congratulation(userName);
}
