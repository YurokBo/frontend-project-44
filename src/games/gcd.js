import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const findGcd = (firstNum, secondNum) => {
  if (secondNum > firstNum) {
    return findGcd(secondNum, firstNum);
  }

  if (!secondNum) {
    return firstNum;
  }

  return findGcd(secondNum, firstNum % secondNum);
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber({ min: 1, max: 11 });
  const randomNumber2 = getRandomNumber({ min: 1, max: 11 });
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = findGcd(randomNumber1, randomNumber2).toString();

  return { question, answer };
};

export default function startGreatestCommonDivisor() {
  runEngine({
    gameQuestion: 'Find the greatest common divisor of given numbers.',
    generateRound,
  });
}
