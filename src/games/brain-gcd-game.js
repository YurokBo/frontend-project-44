import { getUserName, greeting } from '../cli.js';
import { STEPS } from '../utils/constants.js';
import {
  showQuestion, congratulation, getRandomNumber, findGcd, getAnswer, showWrongAnswerText,
} from '../index.js';

export default function startBrainGreatestCommonDivisorGame() {
  const userName = getUserName();
  greeting(userName);
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;

  while (i < STEPS) {
    const randomNumber1 = getRandomNumber(11) + 1;
    const randomNumber2 = getRandomNumber(11) + 1;
    const questionString = `${randomNumber1} ${randomNumber2}`;

    showQuestion(questionString);

    const result = findGcd(randomNumber1, randomNumber2);
    const answer = Number(getAnswer({ text: 'Your answer' }));

    if (result !== answer) {
      showWrongAnswerText({ correctAnswer: result, incorrectAnswer: answer, userName });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  congratulation(userName);
}
