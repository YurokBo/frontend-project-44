import readlineSync from 'readline-sync';
import { congratulation, getUserName, greeting } from './cli.js';

export default function gameEvenOrOdd() {
  const userName = getUserName();
  const steps = 3;
  let i = 0;

  greeting(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (i < steps) {
    const randomNumber = Math.floor(Math.random() * 11) + 1;
    const question = `Question: ${randomNumber}`;

    console.log(question);

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
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  congratulation(userName);
}
