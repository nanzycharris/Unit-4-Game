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
    var currentScore = 0;
    // Set a new target score (19-120)
    targetScore = getRandom(19, 120);
    // Set different values for each of the crystals (1-12)
    crystal.red.value = getRandom(1, 12);
    crystal.white.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.blue.value = getRandom(1, 12);
    // Change the HTML to reflect all of these changes

    // Console log to test 
    console.log("------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Red: " + crystal.red.value + " | White: " + crystal.white.value + " | Yellow: " + crystal.yellow.value + " | Purple: " + crystal.purple.value + " | Blue: " + crystal.blue.value);
    console.log("------------------------");

};


// MAIN PROCESS
//---------------------------------------------------------
startGame();

$("#red").click(function () {
    alert("test")
});


$("#white").click(function () {
    alert("test")
});


$("#yellow").click(function () {
    alert("test")
});


$("#purple").click(function () {
    alert("test")
});


$("#blue").click(function () {
    alert("test")
});