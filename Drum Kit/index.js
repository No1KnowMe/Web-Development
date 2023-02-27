var buttons = document.querySelectorAll("button");
for (button of buttons){
	button.addEventListener("click", clickMe);
}

function clickMe() {
	var btn_innerHTML = this.innerHTML;
	makeSound(btn_innerHTML);

	try{
		btnAnimation(btn_innerHTML);
	}
	catch{
		console.log("This is wrong keyboard!");
	}
	

	function makeSound(btn){
		switch(btn){
			case "W": case "w":
				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
			  	break;
			case "A": case "a":
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
			  	break;
			case "S": case "s":
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
			  	break;
			case "D": case "d":
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
			  	break;
			case "K": case "k":
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
			  	break;
			case "L": case "l":
				var kick = new Audio("sounds/kick-bass.mp3");
				kick.play();
			  	break;
			case "J": case "j":
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
				break;
			default: console.log(btn);
		}
	}
}


document.addEventListener("keydown", pressMe);
function pressMe() {
	makeSound(event.key);

	try{
		btnAnimation(event.key);
	}
	catch{
		console.log("This is wrong keyboard!");
	}
	

	function makeSound(key){
		switch(key){
			case "W": case "w":
				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
			  	break;
			case "A": case "a":
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
			  	break;
			case "S": case "s":
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
			  	break;
			case "D": case "d":
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
			  	break;
			case "K": case "k":
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
			  	break;
			case "L": case "l":
				var kick = new Audio("sounds/kick-bass.mp3");
				kick.play();
			  	break;
			case "J": case "j":
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
				break;
			default: console.log(key);
		}
	}
}

function btnAnimation(key){
	var btnPressed = document.querySelector("."+key.toLowerCase());
	btnPressed.classList.add("pressed");
	setTimeout(function () {
		btnPressed.classList.remove("pressed");
	}, 100);
}
