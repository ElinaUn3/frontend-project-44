import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const generateNumberArray = (startsNum, stepUp) => {
  const questionArr = [];
  for (let i = startsNum; questionArr.length < 10; i += stepUp) {
    questionArr.push(i);
  }

  return questionArr;
};

const generateProgressionGameStage = () => {
  const maxRandomNumberOne = 51;
  const maxRandomNumberTwo = 9;
  const maxRandomNumberThree = 10;
  const minRandomNumber = 1;

  const randomStartsNum = getRandomNumber(maxRandomNumberOne);
  const randomStepUp = getRandomNumber(maxRandomNumberTwo, minRandomNumber);
  const randomPositionHide = getRandomNumber(maxRandomNumberThree);

  const questionArr = generateNumberArray(randomStartsNum, randomStepUp);

  const answerForExpression = String(questionArr[randomPositionHide]);
  questionArr[randomPositionHide] = '..';

  const question = `${questionArr.join(' ')}`;

  return [question, answerForExpression];
};

const startProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  startGame(generateProgressionGameStage, description);
};

export default startProgressionGame;
