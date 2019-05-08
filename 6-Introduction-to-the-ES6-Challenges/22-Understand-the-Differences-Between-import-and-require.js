// I learned to use getters and setters to Control Access to an Object

function makeClass() {
"use strict";
/* Alter code below this line */
class Thermostat {
constructor(Fahrenheit) {
this.Fahrenheit = Fahrenheit;
}
get temperature (){
return this.temp;
}

set temperature (thermos) {
this.temp = 5/9 * (thermos - 32);
}
}
/* Alter code above this line */
return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
