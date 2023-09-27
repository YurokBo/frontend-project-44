import { getUserName, greeting } from '../cli.js';
import {
  showQuestion,
  congratulation,
  generateRandomProgression,
  getAnswer,
  showWrongAnswerText,
} from '../index.js';
import { STEPS } from '../utils/constants.js';

export default function startBrainProgressionGame() {
  const userName = getUserName();
  greeting(userName);
  console.log('What number is missing in the progression?');

  let i = 0;

  while (i < STEPS) {
    const { correctResult, progression } = generateRandomProgression({
      length: 6,
      startValue: 101,
      range: 10,
    });

    showQuestion(progression);
    const answer = getAnswer({ text: 'Your answer' });

    if (Number(answer) !== correctResult) {
      showWrongAnswerText({ incorrectAnswer: answer, correctAnswer: correctResult, userName });
      return;
    }

    console.log('Correct!');

    i += 1;
  }

  congratulation(userName);
}
