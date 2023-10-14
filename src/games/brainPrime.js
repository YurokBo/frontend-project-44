import gameControl from '../index.js';
import getRandomNumber from '../helpers.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 && number !== 1) {
      return 'no';
    }
  }

  return 'yes';
};

const generateRound = () => {
  const question = getRandomNumber({ min: 1, max: 100 });
  const correctAnswer = isPrime(question);

  return { question, correctAnswer };
};

export default function startBrainPrime() {
  gameControl({
    gameQuestion: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateRound,
  });
}
