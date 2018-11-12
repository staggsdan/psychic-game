// I spent 12+ hours on this assignment and I'm frustrated, angry, and embarrassed at how little I have to show for it. The git push "d5cce17" was probably the most functional and that was three hours ago / 8-9 hours deep into trying. I was never able to get the game to run Math.random again upon victory, in order to play with a new number, and pushing harder and harder on that one issue has just exhausted me. I've tried different levels of scope and googled the different ways I can define functions and variables in relatino to one another but I must still be deficient on something because I'm not getting it and it feels terrible. I'll be finally reaching out to my assigned tutor tomorrow.


var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var score = 0
var remainder = 9
var losses = 0



// function updateLosses(){
//     document.getElementById("losses").innerHTML = "Losses: " + losses;
// }
// function updateRemainder(){
//     document.getElementById("remainder").innerHTML = remainder;
// }
// function updateGuesses(){
//     document.getElementById("guesses").innerHTML += userSubmission + ", ";
// }
// function resetRemainder(){
//     remainder -9;
// }
// function resetGuesses(){
//     document.getElementById("guesses").innerHTML += userSubmission + ", ";
// }


var resetComputer = alphabet[Math.floor(Math.random()*(alphabet.length))]


    // function resetComputer(){
    // var resetComputer = alphabet[Math.floor(Math.random()*(alphabet.length))]
    // console.log(resetComputer);
    

    document.onkeyup = function(event){
        var userSubmissionAny = event.key;
        var userSubmission = userSubmissionAny.toUpperCase();

        function updateLosses(){
            document.getElementById("losses").innerHTML = "Losses: " + losses;
        }
        function updateRemainder(){
            document.getElementById("remainder").innerHTML = remainder;
        }
        function updateGuesses(){
            document.getElementById("guesses").innerHTML += userSubmission + ", ";
        }
        function resetRemainder(){
            remainder -9;
        }
        function resetGuesses(){
            document.getElementById("guesses").innerHTML += userSubmission + ", ";
        }



    if (userSubmission === resetComputer){
        score++;
        updateWins();
        resetComputer();

    } else if (userSubmission != resetComputer, remainder > 0) {
        remainder--;
        updateRemainder();
        updateGuesses();
    
    } if(remainder = 0){
        losses++;
        updateLosses();
        resetRemainder();
        resetGuesses();
        resetComputer();
    } 

}
}


