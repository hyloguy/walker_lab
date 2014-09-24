// Have the stick figure start at the right border and start walking left
// When he crosses the left border, have him turn around and start walking right (and vice versa)
// Bonus: Make him turn around when you click on him

var leftBorder = 400;
var rightBorder = 700;

var theWalker = null;
var goingLeft = true;

function init(){
	 goingLeft = true;
   theWalker = document.getElementById('img');
   theWalker.style.left = rightBorder+'px';
   theWalker.onclick = turn;
   var nIntervId = setInterval(moveBackAndForth, 50);
}

function moveRight(){
   theWalker.style.left = parseInt(theWalker.style.left) + 5 + 'px';
}

function moveLeft(){
   theWalker.style.left = parseInt(theWalker.style.left) - 5 + 'px';
}

function turn() {
	if (goingLeft) {
		goingLeft = false;
		theWalker.setAttribute('class', 'flip-img');
	} else {
		goingLeft = true;
		theWalker.removeAttribute('class', 'flip-img');
	}
}

function moveBackAndForth(){
	if (goingLeft) {
		if (parseInt(theWalker.style.left) > leftBorder) {
			moveLeft();
		} else {
			turn();
		}
	} else {
		if (parseInt(theWalker.style.left) < rightBorder) {
			moveRight();
		}
		else {
			turn();
		}
	}
}

window.onload = init;
