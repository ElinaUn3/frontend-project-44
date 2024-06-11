const getRandomNumber = (modif, antiZero = 0) => Math.floor(Math.random() * modif + antiZero);

export default getRandomNumber;