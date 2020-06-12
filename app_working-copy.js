// Promise w/ Arrow Function (anfn)
let slowEcho = (message, delay) => {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10 + 1);
    setTimeout(() => {
      console.log(num);
      if (num % 2 === 0) {
        resolve(message);
      } else {
        let err = new Error('Something here is odd');
        reject(err);
      }
    }, delay);
  });
};
// Click event on slowEcho
document.querySelector('#btn-1').addEventListener('click', () => {
  slowEcho('Hello World!', 1000)
    .then((a) => {
      console.log(a);
    })
    .catch((e) => {
      console.log(e);
    });
});

// Promise w/ Function Declaration with IIFE
function sayHey(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.floor(Math.random() * 10 + 1) % 2 === 1
        ? resolve(message)
        : (function () {
            let e = new Error('Opps, something is way wrong!');
            return reject(e);
          })();
    }, delay);
  });
}
// Click event on sayHey
document.querySelector('#btn-2').addEventListener('click', () => {
  sayHey('Hey my Dude!', 1000)
    .then((a) => {
      console.log(a);
    })
    .catch((e) => {
      console.log(e);
    });
});

// Click event on sayHey w/ Async + Await W/O Try + Catch (which will cause a MAJOR (red) error aka Bad Practice)
document.querySelector('#btn-3').addEventListener('click', async () => {
  let message = await sayHey('You made it!', 2000);
  console.log(message);
});

//  Click event on sayHey w/ Async + Await W/ Try + Catch (Best Practice)
document.querySelector('#btn-4').addEventListener('click', async () => {
  try {
    let message = await sayHey('You tha man!', 2000);
    console.log(message);
  } catch (e) {
    console.log(e);
  }
});

// Async + Await w/ Try + Catch to call a function
const getMessage = async () => {
  try {
    let message = await sayHey(`Let's get started!`, 1000);
    console.log(message);
  } catch (e) {
    console.log(e);
  }
};

getMessage();
