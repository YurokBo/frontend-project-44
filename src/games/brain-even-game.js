import readlineSync from 'readline-sync';
import {
  askQuestion, congratulation, getUserName, greeting, showWrongAnswerText,
} from '../utils/cli.js';
import STEPS from '../utils/constants.js';

const userName = getUserName();
greeting(userName);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default function gameEvenOrOdd() {
  let i = 0;

  while (i < STEPS) {
    const randomNumber = Math.floor(Math.random() * 11) + 1;
    askQuestion(randomNumber);

    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const isYesAnswer = answer === 'yes';
    const isNoAnswer = answer === 'no';
    const hasDivisionRemainder = randomNumber % 2 !== 0;
    const isCorrect = (!hasDivisionRemainder && isYesAnswer)
      || (hasDivisionRemainder && isNoAnswer);

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

  congratulation(userName);
}
