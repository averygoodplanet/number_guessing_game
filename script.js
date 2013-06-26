$(document).ready( function () {
	
	var min = 1;
	var max = 10;
	var game_on = false;
	var previous_guess = 0
	var answer = 0;
	var first_guess= true;
	//testing
	var guess = 0;

	function getRandomInt(min, max) { 
		return Math.floor(Math.random() * (max - min + 1)) + min;
		//getRandomInt function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	} 
	
	$('button').on('click', function () { //PLAY 
		//Play button sets new hidden number; puts game into play; first guess to true.
	
		first_guess = true; // global variable; keeping track of first time guessing, so won't compare "previous guess" to current guess on the first guess.
		
		answer = getRandomInt(min, max); //global variable
		
		console.log("Answer: "+answer);

		game_on = true;
		
		//testing
		while (guess != answer) {
		guess = parseInt(prompt("Guess again?"));
		console.log(comparison(guess));
		}
	});
	
	function comparison (guess) { //COMPARES guess and answer and outputs message to user.
		var guess_difference = Math.abs(answer - guess);
		var previous_guess_difference = Math.abs(answer - previous_guess);
		var message = "";
		
		if(guess < min || guess > max) {
			message = "Your guess was not a number between "+min+" and "+max;
		} else {
			if (guess == answer) {
				message = "Your guess was correct. Press 'Play' to play again.";
				game_on = false;
			} else {
				if (first_guess) {
					if (guess > answer) {
						message = "Your guess was TOO HIGH.";
						first_guess = false;
					} 
					if (guess < answer) {
						message = "Your guess was TOO LOW.";
						first_guess = false;
					} 
				} else {
					if (previous_guess_difference > guess_difference) {
						message = "You are getting warmer.";
					}
					if (previous_guess_difference < guess_difference) {
						message = "You are getting colder.";
					}
					if (previous_guess_difference == guess_difference) {
						message = "You're about the same.";
					}
				}
			}
		}
		
		previous_guess = guess;
		
		return message;
	}

}); 
