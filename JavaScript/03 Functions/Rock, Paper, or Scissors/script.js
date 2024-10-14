/**
 * This function takes user input and validates it to ensure it is a valid choice.
 * It then returns the validated user input.
 * @param {string} userInput - The user's input choice.
 * @returns {string} - The validated user input.
 */
const getUserChoice = (userInput) => {
  // Convert user input to lowercase
  userInput = userInput.toLowerCase();

  // Check if user input is a valid choice
  if (
    userInput == "rock" ||
    userInput == "paper" ||
    userInput == "scissors" ||
    userInput == "bomb"
  ) {
    return userInput; // Return the validated user input
  } else {
    return "nothing. You have not input a correct choice"; // Return an error message if user input is not valid
  }
};

// Function to generate a random choice for the computer
function getComputerChoice() {
  // Generate a random number between 0 and 2
  const randomNum = Math.floor(Math.random() * 3);

  // Based on the random number, return the corresponding choice
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Refactored function for determining the winner
function determineWinner(userChoice, computerChoice) {
  // Tie condition
  if (userChoice === computerChoice) {
    return "It is a Tie!"; // Return tie message
  }

  // User input rock -> two possible outcomes
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!"; // Return computer win message
    } else {
      return "You won!"; // Return user win message
    }
  }

  // User input paper -> two possible outcomes
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You won!"; // Return user win message
    } else {
      return "Computer won!"; // Return computer win message
    }
  }

  // User input scissors -> two possible outcomes
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!"; // Return computer win message
    } else {
      return "You won!"; // Return user win message
    }
  }

  // secret code
  if (userChoice === "bomb") {
    return "You won big time!"; // Return special win message
  }

  // lose whenever entering wrong choice
  if (
    userChoice !== "rock" ||
    userChoice !== "paper" ||
    userChoice !== "scissors"
  ) {
    return "You lose big time!"; // Return lose message
  }
}

// Refactored code for playing a game
const playGame = (userInput) => {
  // Get the user's choice based on their input
  const userChoice = getUserChoice(userInput);

  // Get the computer's choice
  const computerChoice = getComputerChoice();

  // Print the user's choice
  console.log(`You threw ${userChoice}`);

  // Print the computer's choice
  console.log(`Computer threw ${computerChoice}`);

  // Determine the winner and print the result
  console.log(determineWinner(userChoice, computerChoice));
};

// play a game here
playGame("paper");
