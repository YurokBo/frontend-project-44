import readlineSync from 'readline-sync';
import {
  askQuestion, congratulation, getUserName, greeting, showWrongAnswerText,
} from '../utils/cli.js';
import STEPS from '../utils/constants.js';

const userName = getUserName();
greeting(userName);
console.log('What is the result of the expression?');

export default function gameCalculation() {
  const mathOperators = ['+', '-', '*'];
  let result = '';
  let i = 0;

  while (i < STEPS) {
    const randomMathOperator = mathOperators[Math.floor(Math.random() * 3)];
    const randomLeftOperand = Math.floor(Math.random() * 11) + 1;
    const randomRightOperand = Math.floor(Math.random() * 11) + 1;
    const operationString = `${randomLeftOperand} ${randomMathOperator} ${randomRightOperand}`;

    askQuestion(operationString);

    switch (randomMathOperator) {
      case '+':
        result = randomLeftOperand + randomRightOperand;
        break;
      case '-':
        result = randomLeftOperand - randomRightOperand;
        break;
      default:
        result = randomLeftOperand * randomRightOperand;
    }

    const answer = Number(readlineSync.question('Your answer: '));

    if (answer !== result) {
      showWrongAnswerText({ correctAnswer: answer, incorrectAnswer: result, userName });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  congratulation(userName);
}
