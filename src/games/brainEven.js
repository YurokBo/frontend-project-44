import gameControl from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber({ min: 1, max: 11 });
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return { question: number, correctAnswer };
};

export default function startBrainEven() {
  gameControl({
    gameQuestion: 'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound,
  });
}
