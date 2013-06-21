$(document).ready( function () {
	
	var min = 1;
	var max = 10;
	var repeat = true; //used in a do-while statement below to allow the user to choose to repeat the game.
	
	//getRandomInt function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	} 
	
	do {
		var answer = getRandomInt(min, max);
		
		console.log("Answer: "+answer);

		while(true) {
			var guess = prompt("I'm thinking of a number between "+min+" and "+max+" . Make a guess.");

			console.log("Guess: "+guess);

			if (guess > answer) {
				alert("Your guess was TOO HIGH.");
			} else if (guess < answer) {
				alert("Your guess was TOO LOW.");
			} else if (guess < min || guess > max) {
				alert("Your guess was outside of the range of "+min+" to "+max);
			}else if (guess == answer) {
				alert("Your guess was correct.");
				break;
			} else {
				alert("I didn't understand your guess.");
			}
		}
		repeat = confirm("Press OK to play again.");
	} while(repeat);
});