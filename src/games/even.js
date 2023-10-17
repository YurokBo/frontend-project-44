import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber({ min: 1, max: 10 });
  const answer = isEven(number) ? 'yes' : 'no';

  return { question: number, answer };
};

export default function startEven() {
  runEngine({
    gameQuestion: 'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound,
  });
}
