import readlineSync from 'readline-sync';

export default ({ gameQuestion, generateRound }) => {
  const amountSteps = 3;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameQuestion);

  for (let i = 0; i < amountSteps; i += 1) {
    const { question, correctAnswer } = generateRound();

    console.log('Question:', question);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
