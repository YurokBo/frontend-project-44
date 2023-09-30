import readlineSync from 'readline-sync';
import { getUserName, greeting } from '../cli.js';
import {
  showQuestion, showWrongAnswerText, getRandomNumber,
} from '../index.js';

const getMathOperationResult = ({ operator, leftOperand, rightOperand }) => {
  let result = '';

  switch (operator) {
    case '+':
      result = leftOperand + rightOperand;
      break;
    case '-':
      result = leftOperand - rightOperand;
      break;
    case '*':
      result = leftOperand * rightOperand;
      break;
    default:
      throw new Error(`Incorrect operator: '${operator}'!`);
  }

  return Number(result);
};

export default function startBrainCalculationGame() {
  const userName = getUserName();
  greeting(userName);
  console.log('What is the result of the expression?');

  const MATH_OPERATORS = ['+', '-', '*'];
  const mathOperatorsLength = MATH_OPERATORS.length;
  let i = 0;

  while (i < 3) {
    const randomMathOperator = MATH_OPERATORS[getRandomNumber({
      min: 0,
      max: mathOperatorsLength,
    })];
    const randomLeftOperand = getRandomNumber({ min: 1, max: 11 });
    const randomRightOperand = getRandomNumber({ min: 1, max: 11 });
    const operationString = `${randomLeftOperand} ${randomMathOperator} ${randomRightOperand}`;
    const mathOperationResult = getMathOperationResult({
      operator: randomMathOperator,
      leftOperand: randomLeftOperand,
      rightOperand: randomRightOperand,
    });

    showQuestion(operationString);

    const answer = Number(readlineSync.question('Your answer: '));

    if (answer !== mathOperationResult) {
      showWrongAnswerText({
        correctAnswer: answer,
        incorrectAnswer: mathOperationResult,
        userName,
      });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
}
