import { getAnswer } from './index.js';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');

  return getAnswer({ text: 'May I have your name?' });
};

export const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};
