import readlineSync from 'readline-sync';

export const congratulation = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const askQuestion = (question) => {
  if (Array.isArray(question)) {
    console.log('Question:', ...question);

    return;
  }
  console.log('Question:', question);
};

export const showWrongAnswerText = ({ incorrectAnswer, correctAnswer, userName }) => {
  console.log(`'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};

export const getRandomNumber = (range = 0) => Math.floor(Math.random() * range);

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

export const generateRandomProgression = () => {
  const progressionLength = getRandomNumber(6) + 5;
  const progressionStartValue = getRandomNumber(101);
  const progressionRange = getRandomNumber(10) + 10;
  const hiddenIndex = getRandomNumber(progressionLength);
  let currentValue = progressionStartValue;
  const progression = [];
  let correctResult;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenIndex) {
      correctResult = currentValue;
      progression.push('..');
      currentValue += progressionRange;
    } else {
      progression.push(`${currentValue}`);
      currentValue += progressionRange;
    }
  }

  return { correctResult, progression };
};
