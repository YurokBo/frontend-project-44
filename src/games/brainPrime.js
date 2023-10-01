import { gameControl, getRandomNumber } from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 && number !== 1) {
      return 'no';
    }
  }

  return 'yes';
};

const generateQuestionAndAnswer = () => {
  const generateQuestion = getRandomNumber({ min: 1, max: 100 });
  const generateAnswer = isPrime(generateQuestion);

  return { generateQuestion, generateAnswer };
};

export default function startBrainPrimeGame() {
  gameControl({
    gameDescription: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestionAndAnswer,
  });
}
