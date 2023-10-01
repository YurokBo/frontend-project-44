import readlineSync from 'readline-sync';
import { getUserName, greeting } from './cli.js';

export const showQuestion = (question) => {
  if (Array.isArray(question)) {
    console.log('Question:', ...question);

    return;
  }
  console.log('Question:', question);
};

export const showWrongAnswerText = ({ incorrectAnswer, correctAnswer, userName }) => {
  console.log(`'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};

export const getRandomNumber = ({ min = 1, max }) => Math.floor(Math.random() * max + min);

export const gameControl = ({ gameDescription, generateQuestionAndAnswer }) => {
  const userName = getUserName();
  greeting(userName);
  console.log(gameDescription);

  let i = 0;

  while (i < 3) {
    const { generateQuestion, generateAnswer } = generateQuestionAndAnswer();
    const answerToString = generateAnswer.toString();

    showQuestion(generateQuestion);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (answerToString !== userAnswer) {
      showWrongAnswerText({
        correctAnswer: answerToString,
        incorrectAnswer: userAnswer,
        userName,
      });

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
