/* I learned how to use math.floor and math.random to generate a random whole number instead of a decimal */

// Example
function ourFunction(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourFunction(1, 9);

// Only change code below this line.
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}
