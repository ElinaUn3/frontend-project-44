import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const isEven = (number) => (number % 2 === 0);

const generateEvenGameStage = () => {
  const maxRandomNumber = 11;

  const randomNumber = getRandomNumber(maxRandomNumber);

  const question = `${randomNumber}`;

  const answerForExpression = String(isEven(randomNumber) ? 'yes' : 'no');

  return [question, answerForExpression];
};

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(generateEvenGameStage, description);
};

export default startEvenGame;