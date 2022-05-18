// From the above, derive the following that accepts and draws the given characters, not just asterisks:
// For all three of these, you can safely assume that 'char'is a string with the length of 1.

// - drawLeftChars(num,char)
function drawLeftChars(num, char){
    var str = "";
    for (var i = 1; i <= num; i++){
        str += char;
    }
    console.log(str);
}

drawLeftChars(75, "#")

// - drawRightChars(num,char)
function drawRightChars(num, char){
    var str = "";
    for (var i = 1; i <= 75-num; i++){
        str += " "
    }
    for (var i = 1; i <= num; i++){
        str += char;
    }
    console.log(str);
}

drawRightChars(10, "!")

// - drawCenteredChars(num,char)
function drawCenteredChars(num, char){
    var str = "";
    for (var i = 1; i <= (75-num)/2; i++){
        str += " "
    }
    for (var i = 1; i <= num; i++){
        str += char;
    }
    for (var i = 1; i <= (75-num)/2; i++){
        str += " "
    }
    console.log(str);
}

drawCenteredChars(69, "^")