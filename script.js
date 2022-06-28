        let allboxes = document.querySelectorAll(".box")
    	let player1 = document.getElementById("player-1-profile-img") 
    	let player2 = document.getElementById("player-2-profile-img") 
    	let popup = document.querySelector("#pop-up-wrapper #pop-up");
    	let popupWin = document.querySelector("#pop-up-wrapper-win #pop-up-win");
    	let winner = document.querySelector("#pop-up-written");
    	let player1Score = document.querySelector("#player-1-score");
    	let player2Score = document.querySelector("#player-2-score");
    	let replayBtn = document.querySelector("#replay-btn");
    	let boxText = document.querySelectorAll('.box');
    	let addNamesBtn = document.querySelector('#add-names');
    	let pl1Name = document.getElementById("pl-1-n");
    	let pl2Name = document.getElementById("pl-2-n");
    	let player1ProfileName = document.getElementById("player-1-name");
    	let player2ProfileName = document.getElementById("player-2-name");
    	let winLine = document.querySelector(".line");
    	
    	
    	
    	player1.style.cssText = "border : 5px solid green;";
    	
    	let turn  = 'x';
    	
    	
    	let player1Winnings = 0;
    	let player2Winnings = 0;
    	
    	function changeTurn() {
    	return turn == 'X' ? 'O' : 'X';
    	
    	}
    	
    	
    	
    	function checkWin() {
    	
    	let eightyToNinetypx = window.matchMedia("(min-width: 800px) and (max-width: 900px)");
    	let seventyToEightypx = window.matchMedia("(min-width: 660px) and (max-width: 800px)");
    	let fiftyToSeventyypx = window.matchMedia("(min-width: 500px) and (max-width: 660px)");
    	let fourtyTofiftyypx = window.matchMedia("(min-width: 350px) and (max-width: 500px)");
    	let oneToThirtypx = window.matchMedia("(min-width: 1px) and (max-width: 350px)");
    	
    	let winProbabilites = [
    	[0, 1, 2, 1.8, 3, 0],
    	[3, 4, 5, 1.8, 10, 0],
    	[6, 7, 8, 1.8, 17, 0],
    	[0, 3, 6, -6, 10, 90],
    	[1, 4, 7, 2, 10, 90],
    	[2, 5, 8, 10, 10, 90],
    	[0, 4, 8, 1.7, 9.9, 40],
    	[6, 4, 2, 1.7, 9.9, 138],
    	]
    	
    	if (eightyToNinetypx.matches) {
    	winProbabilites = [
    	[0, 1, 2, 3, 5.5, 0],
    	[3, 4, 5, 3, 18, 0],
    	[6, 7, 8, 3, 30.2, 0],
    	[0, 3, 6, -9.5, 18.8, 90],
    	[1, 4, 7, 3.7, 18.5, 90],
    	[2, 5, 8, 17, 18.5, 90],
    	[0, 4, 8, 4, 19, 40],
    	[6, 4, 2, 4, 19, 138],
    	]
    	
    	}
    	
    	if (seventyToEightypx.matches) {
    	winProbabilites = [
    	[0, 1, 2, 3, 6, 0],
    	[3, 4, 5, 3, 20.5, 0],
    	[6, 7, 8, 3, 34.5, 0],
    	[0, 3, 6, -10.5, 21, 90],
    	[1, 4, 7, 4.5, 21, 90],
    	[2, 5, 8, 19.2, 21, 90],
    	[0, 4, 8, 3, 20, 40],
    	[6, 4, 2, 4, 20, 138],
    	]
    	
    	}
    	
    	if (fiftyToSeventyypx.matches) {
    	winProbabilites = [
    	[0, 1, 2, 3, 7.5, 0],
    	[3, 4, 5, 3, 24.5, 0],
    	[6, 7, 8, 3, 41.5, 0],
    	[0, 3, 6, -13.2, 25, 90],
    	[1, 4, 7, 3.5, 25, 90],
    	[2, 5, 8, 20.1, 25, 90],
    	[0, 4, 8, 6, 25, 45],
    	[6, 4, 2, 4, 25, 138],
    	]
    	
    	}
    	
    	if (fourtyTofiftyypx.matches) {
    	winProbabilites = [
    	[0, 1, 2, 3, 8.9, 0],
    	[3, 4, 5, 3, 30.5, 0],
    	[6, 7, 8, 3, 52.1, 0],
    	[0, 3, 6, -17, 31, 90],
    	[1, 4, 7, 2.5, 31, 90],
    	[2, 5, 8, 22.29, 31, 90],
    	[0, 4, 8, 3, 31, 45],
    	[6, 4, 2, 4, 31, 136],
    	]

    	
    	}

        if (oneToThirtypx.matches) {
            winProbabilites = [
            [0, 1, 2, 3, 12, 0],
            [3, 4, 5, 3, 40, 0],
            [6, 7, 8, 3, 66.1, 0],
            [0, 3, 6, -23, 39, 90],
            [1, 4, 7, 2.5, 39, 90],
            [2, 5, 8, 28, 39, 90],
            [0, 4, 8, 3, 40, 45],
            [6, 4, 2, 4, 40, 136],
            ]
    
            
            }
    
    	
 
    	
    	
    	
    	winProbabilites.forEach(arr => {
    	if ((boxText[arr[0]].innerText == boxText[arr[1]].innerText) && (boxText[arr[1]].innerText == boxText[arr[2]].innerText) && (boxText[arr[0]].innerText != "")) {
    	if (turn == 'X') {
    	winner = player1ProfileName.innerText + " Win The Match";
    	player1Winnings = player1Winnings + 1;
    	} else { 
    	winner = player2ProfileName.innerText + " Win The Match";
    	player2Winnings = player2Winnings + 1;
    	}
    	player2Score = player1ProfileName.innerText + " = " + player1Winnings;
    	player1Score = player2ProfileName.innerText +" = " + player2Winnings;
    	
    	winLine.classList.add("changeWidth")
    	winLine.style.transform = `translate(${arr[3]}vw, ${arr[4]}vw) rotate(${arr[5]}deg)`;
    	setTimeout(() => {
    	popupWin.style.display = "block";
    	winLine.classList.remove("changeWidth")
    	
    	}, 1450);
    	
    	boxText.forEach(box => {
    	box.style.cssText = "pointer-events : none;";
    	})
    	
    	
    	popupWin.innerHTML = `
    	<span id="pop-up-written">${winner}</span>
    	<div id="score">
    	<div id="score-heading">Score</div>
    	<div id="player-2-score">${player2Score}</div>
    	<div id="player-1-score">${player1Score}</div>
    	</div>
    	<button id="replay-btn" onclick = "replay()">Replay</button>
    	`
    	}
    	})
    	}
    	
    	
    	
    	
    	
    	allboxes.forEach(box => {
    	box.addEventListener("click", () => {
    	box.innerHTML = turn = changeTurn()
    	checkWin();
    	if (turn == "X") {
    	player2.style.cssText = "border : 5px solid green;";
    	player1.style.cssText = "border : 5px solid white;";
    	} else if(turn == "O"){
    	player2.style.cssText = "border : 5px solid white;";
    	player1.style.cssText = "border : 5px solid green;";
    	}
    	
    	if (box.innerText == 'X' || 'O') {
    	box.style.cssText = "pointer-events : none;";
    	}
    	})
    	});
    	
    	function replay() {
    	
    	popupWin.style.display = "none";
    	Array.from(boxText).forEach(e => {
    	e.innerText = "";
    	})
    	turn =  "x";
    	player1.style.cssText = "border : 5px solid green;";
    	player2.style.cssText = "border : 5px solid white;";
    	
    	boxText.forEach(box => {
    	box.style.cssText = "pointer-events : all;";
    	})
    	
    	}
    	
    	
    	addNamesBtn.addEventListener("click", () => {
    	
    	popup.style.cssText = "display : block;"
    	
    	boxText.forEach(box => {
    	box.style.cssText = "pointer-events : none;";
    	})
    	})
    	
    	function addNameClosePopup() {
    	
    	if (pl1Name.value && pl2Name.value) {
    	
    	popup.style.display = "none";
    	
    	player1ProfileName.innerText = pl1Name.value + " (X)";
    	player2ProfileName.innerText = pl2Name.value + " (O)";
    	
    	
    	boxText.forEach(box => {
    	box.style.cssText = "pointer-events : all;";
    	})
    	}
    	}