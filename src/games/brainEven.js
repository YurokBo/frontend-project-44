import { getRandomNumber, gameControl } from '../index.js';

const hasDivisionRemainder = (number) => number % 2 !== 0;

const generateQuestionAndAnswer = () => {
  const generateQuestion = getRandomNumber({ min: 1, max: 11 });
  const isDivisionRemainder = hasDivisionRemainder(generateQuestion);
  const generateAnswer = isDivisionRemainder ? 'no' : 'yes';

  return { generateQuestion, generateAnswer };
};

export default function startBrainEvenOrOdd() {
  gameControl({
    gameDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestionAndAnswer,
  });
}
