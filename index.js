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

  min = 1;
  max = 100;

  //the guessing begins 
  while (guess !== secretNumber) {
    let tempMin = min;
    let tempMax = max;
    let guess = randomNum(tempMin, tempMax);

    //the computer starts to guess the secretNumber
    let input = await ask(`Is your number...${guess}? (y) or (n) > `)
    if (input === "n") {
      let question = await ask(`Is your number (h)igher or (l)ower than ${guess}? > `)
      if (question === "l") {
        tempMax = guess - 1;
      } else if (question === "h") {
        tempMin = guess + 1;
      } 
    } else {
      console.log("Yay! I guessed it! Good game.")
      break;
    }

  }
  process.exit()
}
