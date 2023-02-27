var started = false;
var level = 0;
var userClickedPattern = new Array();
var gamePattern = new Array();
var buttonColours = new Array("red", "blue", "green", "yellow");

$(document).keypress(function() {
	if (!started) {
 		$("#level-title").text("Level " + level);
		nextSequence();
		started = true;
	}
});

$(".btn").on("click", function(){
	var userChosenColor = event.target.id;
	userClickedPattern.push(userChosenColor);

	playSound(userChosenColor);
	animatePress(userChosenColor);
	console.log(gamePattern);
	console.log(userClickedPattern);
	checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
	userClickedPattern = [];
	level++;
	$("#level-title").text("Level "+level);

	var randomNumber = Math.round(Math.random()*3);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);

	$("#"+randomChosenColour).animate({opacity: 0}, 200).animate({opacity: 1}, 200);
	playSound(randomChosenColour);
}

function playSound(name){
	var playedAudio = new Audio("sounds/"+name+".mp3");
	playedAudio.play();
};

function animatePress(currentColour){
	$("#"+currentColour).addClass("pressed");
	setTimeout(function() {
		$("#"+currentColour).removeClass("pressed");
	}, 100);
};

function checkAnswer(currentLevel){
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length){
			setTimeout(nextSequence, 1000);
		}
		
	}
	else {
			$("body").addClass("game-over");
			setTimeout(function() {
			$("body").removeClass("game-over");
			}, 200);
			playSound("wrong");
			setTimeout(startOver, 200);
		};
};

function startOver(){
	$("#level-title").text("Game Over. Press A Key to Restart");
	level = 0;
	gamePattern = [];
	started = false;
}