import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  showQuestion,
  showWrongAnswerText,
} from '../index.js';
import { getUserName, greeting } from '../cli.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 && number !== 1) {
      return 'no';
    }
  }

  return 'yes';
};

export default function startBrainPrimeGame() {
  const userName = getUserName();
  greeting(userName);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;

  while (i < 3) {
    const randomNumber = getRandomNumber({ min: 1, max: 100 });
    const correctAnswer = isPrime(randomNumber);
    showQuestion(randomNumber);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const isYesAnswer = answer === 'yes';
    const isNoAnswer = answer === 'no';
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

  console.log(`Congratulations, ${userName}!`);
}
