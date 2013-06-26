$(document).ready( function () {
	
	var min = 1;
	var max = 10;
	var game_on = false;
	var previous_guess = 0
	var answer = 0;
	var first_guess= true;
	

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
	});
	
	function comparison (guess) { //COMPARES guess and answer and outputs message to user.
		var guess_difference = Math.abs(answer - guess);
		var previous_guess_difference = Math.abs(answer - previous_guess);
		var message = "";
		
		if (guess == answer) {
			message = "Your guess was correct. Press 'Play' to play again.";
			console.log(message);
			game_on = false;
		} else {
			if (first_guess) {
			
			} else {
			
			}
		}
	}
	/*$("#guess").keypress(function (event) {
	
		if ( event.which == 13) { //When ENTER pressed in guess box
			
			var guess = $("#play").val();
			console.log("Guess: "+guess);
				
			if (!first_guess) {
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
				alert("Your guess was correct. Press 'Play' to play again.");
			} else {
				alert("I didn't understand your guess.");
			}
			
			previous_guess = guess;
			first_guess += 1; 
		}
	}); */
}); 
