// Timing Out
// Create + call function
// const showMessage = (message) => console.log(message);
// showMessage('Greetings Earthlings');

// setTimeout
// const showMessage2 = (message) => {
//   setTimeout(() => {
//     console.log(message);
//   }, 2000);
// };
// showMessage2('Greetings from Earth');

// console.log() + 3 * setTimeout()
// const getWords = (word) => {
//   console.log(word);
//   setTimeout(() => {
//     console.log(word + ' 3s');
//   }, 3000);

//   setTimeout(() => {
//     console.log(word + ' 2s');
//   }, 2000);

//   setTimeout(() => {
//     console.log(word + ' 1s');
//   }, 1000);
// };
// getWords('Hello at');

// Callbacks and Recursion
const done = () => console.log(`Job's done!`);

const countdown = (num, callback) => {
  if (num !== 1) {
    setTimeout(() => {
      console.log(num);
      countdown(num - 1, callback);
    }, 1000);
  } else {
    console.log(num);
    callback();
  }
};

countdown(3, done);

// Promises Promises ;)
let lunchTime = true;
let orderMeSomeFood = () => {
  return new Promise((resolve, reject) => {
      if (lunchTime) {
          let myFavLunch = {
            lunch: 'Pizza',
            drink: 'Milk',
          };
          resolve(myFavLunch.lunch)
      } else {
          let errorMessage = new Error("It's not lunchtime!")
          reject(errorMessage)
      }
  });
};


orderMeSomeFood()
.then(res => console.log(res))
.catch(err => console.log(err))