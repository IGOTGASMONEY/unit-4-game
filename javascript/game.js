// ### Option One: CrystalsCollector Game (Recommended)

// ![Crystal Collector](Images/1-CrystalCollector.jpg)

// 1. [Watch the demo](https://youtu.be/yNI0l2FMeCk).

// 2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

$(document).ready(function() {

    
    //    * There will be four crystals displayed as buttons on the page.
    // * Each crystal should have a random hidden value between 1 - 12.
    //used ids from HTML to give the class of chrystals a individual random number 
    // Math.random will generate a number between 1-12 randomly using Math.Floor to convert from boolean to a whole number 
    var ranNum1 = Math.floor(Math.random () * 12) +1 ;
    var ranNum2 = Math.floor(Math.random () * 12) +1 ; 
    var ranNum3 = Math.floor(Math.random () * 12) +1;
    var ranNum4 = Math.floor(Math.random () * 12) +1;
    
    
    
    // * The random number shown at the start of the game should be between 19 - 120.
    var random= Math.floor(Math.random () * 120) +19;
    //    * The player will be shown a random number at the start of the game.
    $('#ranNum').text(random);
    
    
    //These variables will be used to establis the total , wins , losses . Setting each to zero for the player 
    var totalScore=0;
    var wins=0;
    var losses=0;
    $("#xWins").text(wins);
    $("#xLosses").text(losses);
    
    //This will display a alert when the player has won
    function winning() {
        alert ("YOU DID IT !");
        wins++;
        $("xWins").text(wins);
        reset();
    }
// This will display and alert when the player has lost 
    function losing() {
        alert ("TRY AGAIN LOSER !");
        losses++;
        $("xLosses").text(losses);
        reset();
    }

    // This function will reset the game 
    function reset() {
        // This will reset the random number at the beginnig of the game 
        var random= Math.floor(Math.random () * 120) +19;
        // The next part that will be cleard and set anew are all the crystal values
     ranNum1 = Math.floor(Math.random () * 12) +1;
     ranNum2 = Math.floor(Math.random () * 12) +1; 
     ranNum3 = Math.floor(Math.random () * 12) +1;
     ranNum4 = Math.floor(Math.random () * 12) +1;

     //The total score will also need to be reset 
     totalScore=0;
     // This print out to screen 
     $("#tS").text(totalScore);

    }
    
    
    
    
    
    
    //    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

    $("#chrys1").on("click" , function(){ 
        totalScore=totalScore + ranNum1;
        console.log("totalScore=" + totalScore );
        $("#tS").text(totalScore);

        // Using a if statment we can set perameters to our fuction to let player know if they are winning or losing 

        if (totalScore === random) {
            winning();
            // This will call the losing function everytime the total score is more than the random number chosen at the begging
        }else if (totalScore > random) {
            losing();
        }




    })

    $("#chrys2").on("click" , function(){ 
        totalScore=totalScore + ranNum2;
        console.log("totalScore=" + totalScore );
        $("#tS").text(totalScore);

        // Using a if statment we can set perameters to our fuction to let player know if they are winning or losing 

        if (totalScore === random) {
            winning();
            // This will call the losing function everytime the total score is more than the random number chosen at the begging
        }else if (totalScore > random) {
            losing();
        }




    })

    $("#chrys3").on("click" , function(){ 
        totalScore=totalScore + ranNum1;
        console.log("totalScore=" + totalScore );
        $("#tS").text(totalScore);

        // Using a if statment we can set perameters to our fuction to let player know if they are winning or losing 

        if (totalScore === random) {
            winning();
            // This will call the losing function everytime the total score is more than the random number chosen at the begging
        }else if (totalScore > random) {
            losing();
        }




    })

    $("#chrys4").on("click" , function(){ 
        totalScore=totalScore + ranNum1;
        console.log("totalScore=" + totalScore );
        $("#tS").text(totalScore);

        // Using a if statment we can set perameters to our fuction to let player know if they are winning or losing 

        if (totalScore === random) {
            winning();
            // This will call the losing function everytime the total score is more than the random number chosen at the begging
        }else if (totalScore > random) {
            losing();
        }




    });







    //      * Your game will hide this amount until the player clicks a crystal.
    //      * When they do click one, update the player's score counter.
    
    //    * The player wins if their total score matches the random number from the beginning of the game.
    
    //    * The player loses if their score goes above the random number.
    
    //    * The game restarts whenever the player wins or loses.
    
    //      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
    
    //    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
    
    // ##### Option 1 Game design notes
    
    
    //create varibles to track
    
    //wins
});
