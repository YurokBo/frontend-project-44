import { getUserName, greeting } from '../cli.js';
import { STEPS } from '../utils/constants.js';
import {
  askQuestion, congratulation, getRandomNumber, findGcd, getAnswer, showWrongAnswerText,
} from '../index.js';

const userName = getUserName();
greeting(userName);
console.log('Find the greatest common divisor of given numbers.');

export default function getGreatestCommonDivisor() {
  let i = 0;

  while (i < STEPS) {
    const randomNumber1 = getRandomNumber(11) + 1;
    const randomNumber2 = getRandomNumber(11) + 1;
    const questionString = `${randomNumber1} ${randomNumber2}`;

    askQuestion(questionString);

    const result = findGcd(randomNumber1, randomNumber2);
    const answer = Number(getAnswer({ question: 'Your answer' }));

    if (result !== answer) {
      showWrongAnswerText({ correctAnswer: result, incorrectAnswer: answer, userName });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  congratulation(userName);
}
