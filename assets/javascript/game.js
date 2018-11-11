var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var score = 0
var remainder = 9
var losses = 0

var computerPutsForward = alphabet[Math.floor(Math.random()*(alphabet.length))]
// var computerPutsForward = alphabet.indexOf(computerCalc);
    // console.log(computerPutsForward)
// so the computer generates computerCalc and I turn the array position into the equivalent string character so the player can try to match it

console.log(computerPutsForward);



document.onkeyup = function(event){
    var userSubmissionAny = event.key;
    var userSubmission = userSubmissionAny.toUpperCase();

    if (userSubmission === computerPutsForward){
        score++;
        document.getElementById("wins").innerHTML = "Wins: " + score
        
        console.log(score);
    } else {
        remainder--;
        document.getElementById("remainder").innerHTML = remainder;
        document.getElementById("guesses").innerHTML += (userSubmission + ", ");
        console.log(remainder)
        
        // if (remainder === 0){  
        //    losses++;
                // code note -- losses ++ is correct. figure out how to run the alphabet math again.
        // }
        
    }};

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