import readlineSync from 'readline-sync';

export default ({ gameQuestion, generateRound }) => {
  const stepsCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameQuestion);

  for (let i = 0; i < stepsCount; i += 1) {
    const { question, answer } = generateRound();

    console.log('Question:', question);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
