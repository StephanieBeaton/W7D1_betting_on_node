// Write a single-player betting game that runs in the browser.
// The player starts off with a bankroll of $100
// and bets money to guess a number randomly chosen by the game.
// If the player loses all their money, the game ends.

// The game should ask the player to place a bet between $5 and $10,
// then to guess a number between 1 and 10.

// If the player guesses the exact number chosen by the game,
// they win the bet and their bankroll increases by the amount they bet.
// For example, if the player has $50, bets $10 on number 7,
// and the game chose the number 7,
// then the player wins $10 and now has a bankroll of $60.

// If the player guesses a number that is off by 1, that is,
// the player guesses either one number higher or one number lower than
// the computer's pick, they don't lose any money.
// For example, if the player has $50, bets $10 on number 7,
// and the game chose the number 8,
// then the player keeps their bet and still has a bankroll of $50.

// If the player guesses any other number,
// they lose the bet and their bankroll decreases by the amount they bet.
// For example, if the player has $50, bets $10 on number 7,
// and the game chose the number 2,
// then the player loses $10 and now has a bankroll of $40.

// Use prompt and alert to communicate with the user.

// Tips:

// Recall your very first 2-player math game with Ruby
//  and how you built it incrementally
// Don't worry about an object-oriented solution, but do use your intuition
// and experience to break the code into smaller functions
// Use console.log for printing debugging messages to the Chrome DevTools' Console

var prompt = require('sync-prompt').prompt;


(function () {
var bankroll = 100;
var usersBet = 0;
var userNumber = 0;
var randomNumber = 0;

while (usersBet !== 'quit' && bankroll > 0) {

  // generate a random number
  randomNumber = Math.floor((Math.random() * 6) + 5);

  usersBet = prompt("Place a bet between $5 and $10 or enter quit to exit");



  if (usersBet !== 'quit') {

    // check that the user entered number between 5 and 10

    usersBet = parseInt(usersBet, 10);

    do {
      userNumber = parseInt(prompt("guess a number between 1 and 10"), 10);

      // check the user entered a number between 1 and 10
      userNumber = parseInt(userNumber, 10);
    } while (!(userNumber <= 10 && userNumber >= 1));

    console.log("The computer random number is " + randomNumber);
    console.log("The number you guessed is " + userNumber);

    if (randomNumber === userNumber) {
      bankroll += usersBet;
      console.log("Congratulations! you won $" + usersBet + ". Your new bankroll is $" + bankroll);

    } else if (Math.abs(randomNumber - userNumber) <= 1) {
      // If the player guesses a number that is off by 1
      // ... they don't lose any money.
      console.log("You guessed a number off by $1.  You don't lose any money.");

      console.log("Your bankroll is still $" + bankroll);

    } else {

      bankroll -= usersBet;

      console.log("Sorry you lost!  Your bankroll is now $" + bankroll);

    }
  }

}

console.log("Game Over!  You lost all your bankroll.");

}());




