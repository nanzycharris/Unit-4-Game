// GLOBAL VARIABLES
//--------------------------------------------------------

// Crystal Variables
var crystal = {
    red:
    {
        name: "Red",
        value: 0
    },
    white:
    {
        name: "White",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    },
    purple:
    {
        name: "Purple",
        value: 0
    },
    blue:
    {
        name: "Blue",
        value: 0
    },
}

// Scores: target and current
var targetScore = 0;
var currentScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;

//FUNCTIONS
//--------------------------------------------------------
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function () {
    // Reset the current score
    currentScore = 0;
    // Set a new target score (19-120)
    targetScore = getRandom(19, 120);
    // Set different values for each of the crystals (1-12)
    crystal.red.value = getRandom(1, 12);
    crystal.white.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.blue.value = getRandom(1, 12);
    // Change the HTML to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    // Console log to test 
    console.log("------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Red: " + crystal.red.value + " | White: " + crystal.white.value + " | Yellow: " + crystal.yellow.value + " | Purple: " + crystal.purple.value + " | Blue: " + crystal.blue.value);
    console.log("------------------------");
};

// Respond to clicks on the crystals
var addValues = function (crystal) {
    // Change current score
    currentScore = currentScore + crystal.value;
    // Change the HTML to reflect changes in current score
    $("#yourScore").html(currentScore);
    // Call checkWin Function
    checkWin();
    // Testing console
    console.log("Your score " + currentScore);
}

// Check if user Won or Lost and reset the game
var checkWin = function () {
    // Check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
        //setTimeout(function () {
        alert("Sorry. You Lost");
        //}, 1000);
        console.log("You lost");
        // Add to loss counter
        lossCount++;
        // Change HTML to reflect changes
        $("#lossCount").html(lossCount);
        // Restart the game
        startGame();
    }
    else if (currentScore == targetScore) {
        alert("Congratulations! You Won!");
        console.log("You won");
        // Add to win counter
        winCount++;
        // Change HTML to reflect changes
        $("#winCount").html(winCount);
        // Restart the game
        startGame();
    }
}

// MAIN PROCESS
//---------------------------------------------------------
startGame();

$("#red").click(function () {
    addValues(crystal.red);
});


$("#white").click(function () {
    addValues(crystal.white);
});


$("#yellow").click(function () {
    addValues(crystal.yellow);
});


$("#purple").click(function () {
    addValues(crystal.purple);
});


$("#blue").click(function () {
    addValues(crystal.blue);
});