var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function initial (){
var score = 0
var remainder = 9
var losses = 0
// var computerStarts = alphabet[Math.floor(Math.random()*(alphabet.length))]

}









function targetAlpha (){
    return alphabet[Math.floor(Math.random()*(alphabet.length))]
}    

function updateGuesses(){
    document.getElementById("guesses").innerHTML += userSubmission + ", ";
}

var computerStarts = targetAlpha();

document.onkeyup = function(event){
    var userSubmissionAny = event.key;
    var userSubmission = userSubmissionAny.toUpperCase();
    updateGuesses();





function updateWins(){
    document.getElementById("wins").innerHTML = "Wins: " + score;
}
function updateLosses(){
    document.getElementById("losses").innerHTML = "Losses: " + losses;
}
function updateRemainder(){
    document.getElementById("remainder").innerHTML = remainder;
}
function resetRemainder(){
    document.getElementById("remainder").innerHTML = 9;
}
function resetGuesses(){
    document.getElementById("guesses").innerHTML += userSubmission + ", ";
}
// function targetAlpha2(){
//     alphabet[Math.floor(Math.random()*(alphabet.length))]
// }
// var targetAlpha2 = targetAlpha2();
// reset guesses isn't working organically. just sets the counter to 9 and no longer decreases.


    
    

        

        if (userSubmission === computerStarts || userSubmission == targetAlpha){
            score++;
            updateWins();
            targetAlpha();

        } else if (userSubmission != computerStarts, remainder > 0) {
            remainder--;
            updateRemainder();
            updateGuesses();
        
        } if(remainder = 0){
            losses++;
            resetRemainder();
            resetGuesses();
            targetAlpha();
        } 
        
        // else if (remainder = 0, userSubmission != computerStarts){  
        //     losses++;
        //     updateLosses();
        //     resetRemainder();
        //     targetAlpha();
        // } else if (remainder = 0, userSubmission!= targetAlpha2){
        //     losses++;
        //     updateLosses();
        //     resetRemainder();
        //     targetAlpha();
        

    
    }
        
     




// var userSubmission 

// tkVarName.toUpperCase

// code an array of the alphabet -- DONE

// code a math.random that pulls from alpha array -- DONE

// code the user input via keyboard -- DONE

// code if/else for matching the user to the random letter.
// if the user matches, the score counter goes up and the math function runs again. possibly the guesses decreases either way?
// else the guess counter decreases by one and the user input gets appended to the guesses row

// watch out for keeping the user input defined

// early in JS, make the input UpperCase -- DONE