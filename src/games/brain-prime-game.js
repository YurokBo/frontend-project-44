import {
  congratulation,
  getAnswer,
  getRandomNumber,
  isPrime,
  showQuestion,
  showWrongAnswerText,
} from '../index.js';
import { getUserName, greeting } from '../cli.js';
import { ANSWER_TYPES, STEPS } from '../utils/constants.js';

export default function startBrainPrimeGame() {
  const userName = getUserName();
  greeting(userName);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const { YES, NO } = ANSWER_TYPES;
  let i = 0;

  while (i < STEPS) {
    const randomNumber = getRandomNumber(100) + 1;
    const correctAnswer = isPrime(randomNumber);
    showQuestion(randomNumber);
    const answer = getAnswer({ text: 'Your answer' }).toLowerCase();
    const isYesAnswer = answer === YES;
    const isNoAnswer = answer === NO;
    const isCorrect = answer === correctAnswer || answer === isNoAnswer;

    if (!isYesAnswer && !isNoAnswer) {
      console.log(`It is wrong input ;(. Correct input is "no" or "yes".\nLet's try again, ${userName}!`);

      return;
    }

    if (!isCorrect) {
      showWrongAnswerText({ incorrectAnswer: answer, correctAnswer, userName });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  congratulation(userName);
}
