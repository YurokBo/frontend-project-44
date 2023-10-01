import { getRandomNumber, gameControl } from '../index.js';

const findGcd = (firstNum, secondNum) => {
  if (secondNum > firstNum) {
    return findGcd(secondNum, firstNum);
  }

  if (!secondNum) {
    return firstNum;
  }

  return findGcd(secondNum, firstNum % secondNum);
};

const generateQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber({ min: 1, max: 11 });
  const randomNumber2 = getRandomNumber({ min: 1, max: 11 });
  const generateQuestion = `${randomNumber1} ${randomNumber2}`;
  const generateAnswer = findGcd(randomNumber1, randomNumber2);

  return { generateQuestion, generateAnswer };
};

export default function startBrainGreatestCommonDivisor() {
  gameControl({
    gameDescription: 'Find the greatest common divisor of given numbers.',
    generateQuestionAndAnswer,
  });
}
