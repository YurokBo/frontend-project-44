import { getUserName, greeting } from '../cli.js';
import {
  showQuestion, congratulation, getAnswer, getRandomNumber, showWrongAnswerText,
} from '../index.js';
import { STEPS, ANSWER_TYPES } from '../utils/constants.js';

const userName = getUserName();
greeting(userName);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default function gameEvenOrOdd() {
  const { YES, NO } = ANSWER_TYPES;
  let i = 0;

  while (i < STEPS) {
    const randomNumber = getRandomNumber(11) + 1;
    showQuestion(randomNumber);

    const answer = getAnswer({ text: 'Your answer' }).toLowerCase();
    const isYesAnswer = answer === YES;
    const isNoAnswer = answer === NO;
    const hasDivisionRemainder = randomNumber % 2 !== 0;
    const isCorrect = (!hasDivisionRemainder && isYesAnswer)
      || (hasDivisionRemainder && isNoAnswer);

    if (!isYesAnswer && !isNoAnswer) {
      console.log(`It is wrong input ;(. Correct input is "no" or "yes".\nLet's try again, ${userName}!`);

      return;
    }

    if (!isCorrect) {
      const correctAnswer = answer === YES ? NO : YES;
      showWrongAnswerText({ incorrectAnswer: answer, correctAnswer, userName });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  congratulation(userName);
}
