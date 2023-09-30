import readlineSync from 'readline-sync';
import { getUserName, greeting } from '../cli.js';
import {
  showQuestion,
  getRandomNumber,
  showWrongAnswerText,
} from '../index.js';

const hasDivisionRemainder = (number) => number % 2 !== 0;

export default function startBrainEvenOrOddGame() {
  const userName = getUserName();
  greeting(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;

  while (i < 3) {
    const randomNumber = getRandomNumber({ min: 1, max: 11 });
    showQuestion(randomNumber);

    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const isYesAnswer = answer === 'yes';
    const isNoAnswer = answer === 'no';
    const isDivisionRemainder = hasDivisionRemainder(randomNumber);
    const isCorrect = (!isDivisionRemainder && isYesAnswer)
      || (isDivisionRemainder && isNoAnswer);

    if (!isYesAnswer && !isNoAnswer) {
      console.log(`It is wrong input ;(. Correct input is "no" or "yes".\nLet's try again, ${userName}!`);

      return;
    }

    if (!isCorrect) {
      const correctAnswer = answer === 'yes' ? 'no' : 'yes';
      showWrongAnswerText({ incorrectAnswer: answer, correctAnswer, userName });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
}
