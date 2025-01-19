// Function to increase score by 1
function plus1(team) {
    let screen = document.getElementById(team);
    let currentScore = parseInt(screen.textContent);
    screen.textContent = currentScore + 1;
}

// Function to increase score by 2
function plus2(team) {
    let screen = document.getElementById(team);
    let currentScore = parseInt(screen.textContent);
    screen.textContent = currentScore + 2;
}

// Function to increase score by 3
function plus3(team) {
    let screen = document.getElementById(team);
    let currentScore = parseInt(screen.textContent);
    screen.textContent = currentScore + 3;
}
alert("Welcome to the Basketball Scoreboard! Click on the buttons to increase the score of the team. Enjoy the game!");
function winner(team) {
    alert(team + " wins!");
}