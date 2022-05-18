// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (the first star would be very first char in the text field), or right-justified (the last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75- character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

// - Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.

function drawLeftStars(num){
    var stars = "";
    for (var i = 1; i <= num; i++){
        stars += '*';
    }
    console.log(stars);
}

drawLeftStars(75)

// - Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. The last num characters should be asterisks; the other 75 should be spaces.

function drawRightStars(num){
    var stars = "";
    for (var i = 1; i <= 75-num; i++){
        stars += ' ';
    }
    for (var i = 1; i <= num; i++){
        stars += '*';
    }
    console.log(stars);
}

drawRightStars(15)

// - Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.

function drawCenteredStars(num){
    var stars = "";
    for (var i = 1; i <= (75-num)/2; i++){
        stars += ' ';
    }
    for (var i = 1; i <= num; i++){
        stars += '*';
    }
    for (var i = 1; i <= (75-num)/2; i++){
        stars += ' ';
    }
    console.log(stars);
}

drawCenteredStars(70)


// - (Optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.
function drawEmpireVsRebellion(num){
    var empire = "";
    var rebellion = "";
    for (var i = 1; i <= num; i++){
        empire += ' =*= ';
        rebellion += ' >o< ';
    }
    console.log(empire+rebellion);
}

drawEmpireVsRebellion(75)