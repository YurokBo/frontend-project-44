import { getRandomNumber, gameControl } from '../index.js';

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

const generateQuestionAndAnswer = () => {
  const mathOperators = ['+', '-', '*'];
  const mathOperatorsLength = mathOperators.length;
  const randomMathOperator = mathOperators[getRandomNumber({
    min: 0,
    max: mathOperatorsLength,
  })];
  const randomLeftOperand = getRandomNumber({ min: 1, max: 11 });
  const randomRightOperand = getRandomNumber({ min: 1, max: 11 });
  const generateQuestion = `${randomLeftOperand} ${randomMathOperator} ${randomRightOperand}`;
  const generateAnswer = getMathOperationResult({
    operator: randomMathOperator,
    leftOperand: randomLeftOperand,
    rightOperand: randomRightOperand,
  });

  return { generateQuestion, generateAnswer };
};

export default function startBrainCalc() {
  gameControl({
    gameDescription: 'What is the result of the expression?',
    generateQuestionAndAnswer,
  });
}
