$(document).ready( function () {
	
	var min = 1;
	var max = 10;
	var repeat = true; //used in a do-while statement below to allow the user to choose to repeat the game.
	var previous_guess = 0
	
	//getRandomInt function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	} 
	
	do {
		var first_time_guess = 0; //keeping track of first time guessing, so won't compare "previous guess" to current guess on the first guess.
		
		var answer = getRandomInt(min, max);
		
		console.log("Answer: "+answer);

		while(true) {
			var guess = prompt("I'm thinking of a number between "+min+" and "+max+" . Make a guess.");

			console.log("Guess: "+guess);

			var guess_difference = Math.abs(answer - guess);
			var previous_guess_difference = Math.abs(answer - previous_guess);
			var message = "";
				
			if (first_time_guess > 0) {
				if (previous_guess_difference > guess_difference) {
					message = "  You are getting warmer.";
				}
				if (previous_guess_difference < guess_difference) {
					message = "  You are getting colder.";
				}
			}
			
			if (guess > answer) {
				alert("Your guess was TOO HIGH."+message);
			} else if (guess < answer) {
				alert("Your guess was TOO LOW."+message);
			} else if (guess < min || guess > max) {
				alert("Your guess was outside of the range of "+min+" to "+max);
			}else if (guess == answer) {
				alert("Your guess was correct.");
				break;
			} else {
				alert("I didn't understand your guess.");
			}
			previous_guess = guess;
			first_time_guess += 1;
		}
		repeat = confirm("Press OK to play again.");
	} while(repeat);
});