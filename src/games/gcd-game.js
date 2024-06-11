import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const getGCD = (
  theSmallerOfTwoNumbers,
  randomNumberOne,
  randomNumberTwo,
) => {
  for (let i = theSmallerOfTwoNumbers; i >= 1; i -= 1) {
    if (randomNumberOne % i === 0 && randomNumberTwo % i === 0) {
      return i;
    }
  }
  return 1;
};

const generateGDCGameStage = () => {
  const maxRandomNumber = 49;
  const minRandomNumber = 1;

  const randomNumberOne = getRandomNumber(maxRandomNumber, minRandomNumber);
  const randomNumberTwo = getRandomNumber(maxRandomNumber, minRandomNumber);
  const theSmallerOfTwoNumbers = Math.min(randomNumberOne, randomNumberTwo);

  const question = `${randomNumberOne} ${randomNumberTwo}`;

  const answerForExpression = String(getGCD(
    theSmallerOfTwoNumbers,
    randomNumberOne,
    randomNumberTwo,
  ));

  return [question, answerForExpression];
};

const StartGCDGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  startGame(generateGDCGameStage, description);
};

export default StartGCDGame;