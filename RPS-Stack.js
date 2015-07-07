// RPS-Stack.js
// The goal is to create a function that takes a number of rounds of Rock Paper Scissors
// and returns an array of all possible games. We intend to do this with a Stack structure
// Mathieu is a boss

var rpsSolutions = function(rounds){
  // need to create an external solutions array
  var solutions = [];
  // need to create a stack, that will contain all the states leading up to the solutions
  var stack = [];
  // push an empty array to the stack. This is the root of our decision tree
  stack.push([]);
  // we need a current round variable, which will start at 0
  var currentRound = 0;
  // we need an array containing possible throws
  var possibilities = ['rock', 'paper', 'scissors'];
  // we need a while loop that will run until the stack is empty
  while (stack.length) {
    // (inside the while loop)
    // we need to pop a state off of the stack
    var state = stack.pop();
    // if the length of the state is equal to max rounds
    if (state.length === rounds) {
      // this is a solution, push the state to the external solutions array
      solutions.push(state);
    }
    // else
    else {
    // we need to run a loop for all the possible throws
      for (var i = 0; i < possibilities.length; i++) {
        // make a deep copy of the state
        var stateCopy = state.slice();
        // push the current possible throw to the stateCopy
        stateCopy.push(possibilities[i]);
        // push the stateCopy to the stack
        stack.push(stateCopy);
      }
    }
    // increment current rounds variable
    currentRound++;
  }
  // return external solutions array
  return solutions;
}
