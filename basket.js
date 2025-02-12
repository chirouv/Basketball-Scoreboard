alert("Welcome to the Basketball Scoreboard! Click on the buttons to increase the score of the team. Enjoy the game!");
const requiredKeyword = "1608";
let accessGranted = false;

function askForKeyword() {
    while(!accessGranted){
    let userInput = prompt("Enter the secret keyword to start the game:");
    if (userInput === requiredKeyword) {
        accessGranted = true;
        alert("Access granted! You can now use the scoreboard.");
    } else {
        alert("Incorrect keyword! Refresh the page and try again.");
    }
}
}
askForKeyword();

function validateTeamNames() {
    let team1Name = document.querySelector(".team1").value.trim();
    let team2Name = document.querySelector(".team2").value.trim();

    if (team1Name === "" || team2Name === "") {
        alert("Please enter both team names before starting the game!");
        return false;
    }
    return true;
}
// Function to increase score by 1
function plus1(team) {
    if (!validateTeamNames()) return;
    let screen = document.getElementById(team);
    let currentScore = parseInt(screen.textContent);
    screen.textContent = currentScore + 1;
}

// Function to increase score by 2
function plus2(team) {
    if (!validateTeamNames()) return;
    let screen = document.getElementById(team);
    let currentScore = parseInt(screen.textContent);
    screen.textContent = currentScore + 2;
}

// Function to increase score by 3
function plus3(team) {
    if (!validateTeamNames()) return;
    let screen = document.getElementById(team);
    let currentScore = parseInt(screen.textContent);
    screen.textContent = currentScore + 3;
}
function endGame() {
    if (!validateTeamNames()) return;
    let team1Score = parseInt(document.getElementById("team1").textContent);
    let team2Score = parseInt(document.getElementById("team2").textContent);

    
    if (team1Score > team2Score) {
        alert("Team 1 wins with a score of " + team1Score + "!");
    } else if (team2Score > team1Score) {
        alert("Team 2 wins with a score of " + team2Score + "!");
    } else {
        alert("It's a tie! Both teams have the same score.");
    }

    // ✅ Reset Scores to 0 after the alert
    document.getElementById("team1").textContent = "0";
    document.getElementById("team2").textContent = "0";

}
