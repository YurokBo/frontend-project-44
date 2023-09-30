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
