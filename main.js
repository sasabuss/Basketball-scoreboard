let onePBtn = document.getElementById("first-oneP-btn");
let twoPBtn = document.getElementById("first-twoP-btn");
let threePBtn = document.getElementById("first-threeP-btn");
let newGame = document.getElementById("new-game");
let newGameText = document.querySelector(".new-game");

let secondOnePBtn = document.getElementById("second-oneP-btn");
let secondTwoPBtn = document.getElementById("second-twoP-btn");
let secondThreePBtn = document.getElementById("second-threeP-btn");

let homePoint = document.getElementById("home-point");
let guestPoint = document.getElementById("guest-point");

let downArrow = document.getElementById("up");
let upArrow = document.getElementById("down");
let periodScore = document.getElementById("period-score");
let period = 0;

let homeScore = 0;
let guestScore = 0;

function updateLeader() {
	const homeWrapper = homePoint.parentElement;
	const guestWrapper = guestPoint.parentElement;

	if (homeScore > guestScore) {
		homeWrapper.classList.add("leader");
		guestWrapper.classList.remove("leader");
	} else if (guestScore > homeScore) {
		guestWrapper.classList.add("leader");
		homeWrapper.classList.remove("leader");
	} else {
		homeWrapper.classList.remove("leader");
		guestWrapper.classList.remove("leader");
	}
}

onePBtn.addEventListener("click", () => {
	homeScore++;
	homePoint.textContent = homeScore;
	updateLeader();
});

twoPBtn.addEventListener("click", () => {
	homeScore += 2;
	homePoint.textContent = homeScore;
	updateLeader();
});

threePBtn.addEventListener("click", () => {
	homeScore += 3;
	homePoint.textContent = homeScore;
	updateLeader();
});

secondOnePBtn.addEventListener("click", () => {
	guestScore++;
	guestPoint.textContent = guestScore;
	updateLeader();
});

secondTwoPBtn.addEventListener("click", () => {
	guestScore += 2;
	guestPoint.textContent = guestScore;
	updateLeader();
});

secondThreePBtn.addEventListener("click", () => {
	guestScore += 3;
	guestPoint.textContent = guestScore;
	updateLeader();
});

newGame.addEventListener("click", () => {
	guestScore = 0;
	homeScore = 0;
	period = 0;
	guestPoint.textContent = 0;
	homePoint.textContent = 0;
	periodScore.textContent = 0;
});

upArrow.addEventListener("click", () => {
	period = Math.min(period + 1, 4);

	periodScore.textContent = period;
});
