const { secureHeapUsed } = require('crypto');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

  //computer generates a random number and sets it as a guess 

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let guess = randomNum(1, 100);

  //the guessing begins 
  while (guess !== secretNumber) {
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let guess = randomNum(1, 100);

    //the computer starts to guess the secretNumber
    let input = await ask(`Is your number...${guess}? (y) or (n) > `)
    console.log(input);

    //if guess is correct, computer exits, if guess is incorrect, it continues guessing
    if (input === "y") {
      console.log("Yay! I guessed it! Good game.")
      break;
    } else {

      //the computer starts checking if the secretNumber is higher or lower than guess
      let question = await ask(`Is your number (h)igher or (l)ower than ${guess}? > `)
      console.log(question);
      if (question === "l") {
        let tempMax = guess - 1;
      } else {
        let tempMin = guess + 1;
      }

    }
  }
  process.exit()
}
