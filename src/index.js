import readlineSync from 'readline-sync';

export const congratulation = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const showWrongAnswerText = ({ incorrectAnswer, correctAnswer, userName }) => {
  console.log(`'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};

export const getRandomNumber = (range) => Math.floor(Math.random() * range);

export const getAnswer = ({ question }) => readlineSync.question(`${question}: `);

export const findGcd = (firstNum, secondNum) => {
  if (secondNum > firstNum) {
    return findGcd(secondNum, firstNum);
  }
  if (!secondNum) {
    return firstNum;
  }
  return findGcd(secondNum, firstNum % secondNum);
};
