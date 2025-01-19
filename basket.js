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
// Function to check the winner
function winner(team) {
    let team1Score = parseInt(document.getElementById("team1").textContent);
    let team2Score = parseInt(document.getElementById("team2").textContent);

    if (team === 'Team 1' && team1Score <= team2Score) {
        alert("You cannot win as Team 1 has a lower or equal score than Team 2.");
    } else if (team === 'Team 2' && team2Score <= team1Score) {
        alert("You cannot win as Team 2 has a lower or equal score than Team 1.");
    } else {
        alert(team + " wins!");
    }
}
function endGame() {
    let team1Score = parseInt(document.getElementById("team1").textContent);
    let team2Score = parseInt(document.getElementById("team2").textContent);

    if (team1Score > team2Score) {
        alert("Team 1 wins with a score of " + team1Score + "!");
    } else if (team2Score > team1Score) {
        alert("Team 2 wins with a score of " + team2Score + "!");
    } else {
        alert("It's a tie! Both teams have the same score.");
    }
}