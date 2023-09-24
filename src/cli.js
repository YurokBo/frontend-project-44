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
