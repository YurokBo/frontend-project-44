import { getUserName, greeting } from '../cli.js';
import {
  showQuestion, showWrongAnswerText, congratulation, getRandomNumber, getAnswer,
} from '../index.js';
import { STEPS, MATH_OPERATORS } from '../utils/constants.js';

export default function startBrainCalculationGame() {
  const userName = getUserName();
  greeting(userName);
  console.log('What is the result of the expression?');

  const mathOperatorsLength = MATH_OPERATORS.length;
  let result = '';
  let i = 0;

  while (i < STEPS) {
    const randomMathOperator = MATH_OPERATORS[getRandomNumber(mathOperatorsLength)];
    const randomLeftOperand = getRandomNumber(11) + 1;
    const randomRightOperand = getRandomNumber(11) + 1;
    const operationString = `${randomLeftOperand} ${randomMathOperator} ${randomRightOperand}`;

    showQuestion(operationString);

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

    const answer = Number(getAnswer({ text: 'Your answer' }));

    if (answer !== result) {
      showWrongAnswerText({ correctAnswer: answer, incorrectAnswer: result, userName });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  congratulation(userName);
}
