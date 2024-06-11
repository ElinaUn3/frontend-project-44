import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const isPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeGameStage = () => {
  const maxRandomNumber = 48;
  const minRandomNumber = 2;

  const randomNumber = getRandomNumber(maxRandomNumber, minRandomNumber);

  const question = `${randomNumber}`;

  const answerForExpression = String(isPrime(randomNumber) ? 'yes' : 'no');

  return [question, answerForExpression];
};

const startPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(generatePrimeGameStage, description);
};

export default startPrimeGame;
