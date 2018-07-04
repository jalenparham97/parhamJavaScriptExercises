// When going through the code, uncomment the exercises to let them run.

///////////////////////////
// Exercise One //
///////////////////////////

const numQuestion = "Choose a number";
const num = prompt(numQuestion);
let total = 0;

for(let i = 0; i <= num; i++) {
  total += i;
}

console.log(total);

/////////////////////////
// Exercise Two //
/////////////////////////

let userChoice = prompt("Do you want to play?");
let words = "";

do {
  let word = prompt("Enter a word.");
  
  words += word + " ";

  userChoice = prompt("Do you want to play again?");

} while (userChoice === "yes" || userChoice === "Yes") {

  console.log(words);
}

/////////////////////////
// Exercise Three //
/////////////////////////

let  userPrompt = prompt("Would you like to print your name?");
let quotationMark = "!";
let nameChoice = "Hi my name is ";

if(userPrompt === "yes" || userPrompt === "Yes") {
  let name = prompt("Enter your name.");

  console.log(nameChoice + name + quotationMark);

  while(true) {
	  userPrompt = prompt("Would you like to print this again?");
	  if(userPrompt === "no" || userPrompt === "No")
	  	break;
	  quotationMark+="!";

	  console.log(nameChoice + name + quotationMark);
  }
}

/////////////////////////
// Exercise Four //
/////////////////////////

const timeOfDay = "What is the time of day?";
const answer = prompt(timeOfDay);

if (answer === "morning" || answer === "Morning") {
  console.log("Since​ ​it​ ​is​ ​morning,​ ​you​ ​should​ ​be​ ​eating​ ​breakfast.​ ​We suggest​ ​eggs​ ​and​ ​toast.")
} else if (answer === "noon" || answer === "Noon") {
  console.log("Since it is noon, you should be eating lunch. We suggest a healthy salad.");
} else if (answer === "evening" || answer === "Evening") {
  console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
}















