// RPS-Stack.js
// The goal is to create a function that takes a number of rounds of Rock Paper Scissors
// and returns an array of all possible games. We intend to do this with a Stack structure
// Mathieu is a boss

var rpsSolutions = function(rounds){
  // need to create an external solutions array
  // need to create a stack, that will contain all the states leading up to the solutions
  // push an empty array to the stack - this represents the root of the tree
  // we need a current round variable, which will start at 0
  // we need an array containing possible throws
  // we need a while loop that will run until the stack is empty
    // (inside the while loop)
    // we need to pop a state off of the stack
    // if the length of the state is equal to max rounds
      // this is a solution, push the state to the external solutions array
    // else
    // we need to run a loop for all the possible throws
      // make a deep copy of the state
      // push the current possible throw to the stateCopy
      // push the stateCopy to the stack
    // increment the current round
  // return external solutions array

};
