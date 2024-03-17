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

  let guessing = true;

  min = 1;
  max = 100;

  //the guessing begins 
  while (guessing) {
    let tempMin = min;
    let tempMax = max;

    //generates a guess
    let guess = randomNum(tempMin, tempMax);

    //fact checks that min isn't greater than max
    do {
      if (tempMin > tempMax) {
        console.log("Sorry, that doesn't seem to be possible.")
      }

      tempMin = min;
      tempMax = max;

      //checks if input is valid and starts guessing 
      let input = null;
      do {
        if (input !== null) {
          console.log("Sorry bad input. Please type y or n.");
        }
        input = await ask(`Is your number...${guess}? (y) or (n) > `);
      } while (input !== "" && input !== "n" && input !== "y");

      //computer checks if input is correct & breaks out of game if it is
      if (input === "y") {
        guessing = false;
        break;
        //fact checks input if input was correct
      } else {
        if (tempMin === tempMax) {
          console.log(`That can't be right. ${guess} has to be your number. Nice try.`)
          guessing = false;
          break;
        }
      }
      //checks if input is valid
      let question = null;
      do {
        if (question !== null) {
          console.log("Sorry bad input. Please type h or l.")
        }
        question = await ask(`Is your number (h)igher or (l)ower than ${guess}? > `)
      } while (question !== "l" && question !== "h");
      //checks if input was lower or higher
      if (question === "l") {
        tempMax = guess - 1;
      } else if (question === "h") {
        tempMin = guess + 1;
      }
    }
    while (tempMin > tempMax);

    min = tempMin;
    max = tempMax;
  }
  console.log("Great! I guessed your number! Good game.")
  process.exit()
}
