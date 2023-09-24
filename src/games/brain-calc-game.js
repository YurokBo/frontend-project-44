import { getUserName, greeting } from '../cli.js';
import {
  askQuestion, showWrongAnswerText, congratulation, getRandomNumber, getAnswer,
} from '../index.js';
import STEPS from '../utils/constants.js';

const userName = getUserName();
greeting(userName);
console.log('What is the result of the expression?');

export default function gameCalculation() {
  const mathOperators = ['+', '-', '*'];
  let result = '';
  let i = 0;

  while (i < STEPS) {
    const randomMathOperator = mathOperators[getRandomNumber(3)];
    const randomLeftOperand = getRandomNumber(11) + 1;
    const randomRightOperand = getRandomNumber(11) + 1;
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

    const answer = Number(getAnswer({ question: 'Your answer' }));

    if (answer !== result) {
      showWrongAnswerText({ correctAnswer: answer, incorrectAnswer: result, userName });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  congratulation(userName);
}
