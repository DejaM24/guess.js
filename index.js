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
  //computer generates guess to secretNumber
  let min = 1
  let max = 100
  let guess = Math.round((min + max) / 2);

  //the computer starting to guess secretNumber
  let input = await ask(`Is your number...${guess} (y) or (n)`)
  console.log(input);

  //the computer startes checking if secretNumber is higher or lower than guess
  if (input = "n") {
  } while (guess !== secretNumber) {
    let question = await ask(`Is your number (h)igher or (l)ower?`)
    console.log(question);
  } 
  
  //if secretNumber is higher than guess ...
    if (question = "h") {
      console.log()
    } 

  // if secretNumber is lower than guess ...
  if (input = "l") {
    console.log();
  }

  // y = secretNumber
  // console.log("Yay! I got it! Good game.")
  // // n = secretNumber

  if (input === "y") {
    console.log("Yay! I guessed it! Good game.");
  }





  // while (secretNumber !== guess)
  //   if (guess < secretNumber) {
  //     guess = await ask("Sorry too low. Guess higher!")
  //   } else {
  //     guess = await ask("Sorry to high. Guess lower!")
  //   }


  process.exit()
}
