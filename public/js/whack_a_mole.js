'use strict';
// To build this game, follow these steps:

// 1. Create your HTML markup and CSS to position your holes.  These will be element that your mole 
// will pop in and out of.

// 1. Randomly select a hole on page load and change its background color to red. You may want to 
// nest another element, and use an animated method like `.fadeIn()`.
var holes = $('.hole');
var body = $('body');
var randomHole = randomHoles();
var score = 0;
console.log(randomHole);
		
		function randomHoles() {
			return Math.floor(Math.random() * 9);
		};

		holes.eq(randomHole).css('background-image', 'url(/images/potential-mole-problem.jpg)');
		holes.eq(randomHole).click(function reassignMole() {
			holes.eq(randomHole).css('background-image', 'none');
			randomHole = randomHoles();
			holes.eq(randomHole).css('background-image', 'url(/images/potential-mole-problem.jpg)');	
			console.log(randomHole);		
		});
		

console.log(score);

// 1. Change the red background to use an image.  This could be a mole, or any other image you'd like to use.

// 1. Update the code to remove the mole when it is clicked.

// 1. Add score.  Each time the mole is successfully clicked, increase the displayed score by 1.

// ### Bonus

// 1. Add a start button.  Don't start the game until the button is pressed.

// 1. Add a timer. Only allow clicks during the period.  If the timer is 30 seconds, the game should 
// quit recording clicks after 30 seconds, and should activate the start button.  
// Clicking the start button should reset the game.

// 1. Keep the high score for the round.  This does not need to persist between page loads, 
// although it could if you wanted it to.

// 1. Make the moles appear more often after each click.