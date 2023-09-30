import readlineSync from 'readline-sync';
import { getUserName, greeting } from '../cli.js';
import {
  showQuestion, getRandomNumber, showWrongAnswerText,
} from '../index.js';

const findGcd = (firstNum, secondNum) => {
  if (secondNum > firstNum) {
    return findGcd(secondNum, firstNum);
  }

  if (!secondNum) {
    return firstNum;
  }

  return findGcd(secondNum, firstNum % secondNum);
};

export default function startBrainGreatestCommonDivisorGame() {
  const userName = getUserName();
  greeting(userName);
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;

  while (i < 3) {
    const randomNumber1 = getRandomNumber({ min: 1, max: 11 });
    const randomNumber2 = getRandomNumber({ min: 1, max: 11 });
    const questionString = `${randomNumber1} ${randomNumber2}`;

    showQuestion(questionString);

    const result = findGcd(randomNumber1, randomNumber2);
    const answer = Number(readlineSync.question('Your answer: '));

    if (result !== answer) {
      showWrongAnswerText({ correctAnswer: result, incorrectAnswer: answer, userName });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
}
