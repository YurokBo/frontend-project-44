import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const calculate = ({ operator, number1, number2 }) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Incorrect operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber({
    min: 0,
    max: operators.length,
  })];
  const number1 = getRandomNumber({ min: 1, max: 11 });
  const number2 = getRandomNumber({ min: 1, max: 11 });
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = calculate({
    operator: randomOperator,
    number1,
    number2,
  }).toString();

  return { question, answer };
};

export default function startCalc() {
  runEngine({
    gameQuestion: 'What is the result of the expression?',
    generateRound,
  });
}
