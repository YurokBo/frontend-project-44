import readlineSync from 'readline-sync';

export default function getUserName() {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
}
