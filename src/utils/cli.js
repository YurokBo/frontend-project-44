import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
};

export const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

export const congratulation = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const showWrongAnswerText = ({ incorrectAnswer, correctAnswer, userName }) => {
  console.log(`'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};
