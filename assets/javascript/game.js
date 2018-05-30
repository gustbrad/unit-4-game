//Variable to tally total wins
var win = 0;

//Variable to tally total losses
var lose = 0;

//Function thats runs everything
function doItAll() {

    //Sets the dom node equal to total losses
    document.getElementById("losses").innerHTML = lose;

    //Sets the dom node equal to total wins
    document.getElementById("wins").innerHTML = win;

    //variable for current score
    var score = 0;

    //Sets the dom node equal to current score
    document.getElementById("my-score").innerHTML = score;

    //Create a random number between 19 and 120
    var randomGoal = Math.floor(Math.random() * 120) + 19;

    //Sets the dom node equal to the random goal
    document.getElementById("random-goal").innerHTML = randomGoal;

    //Create a random number between 1 and 12
    var crystal1 = Math.floor(Math.random() * 12) + 1;

    //Create a random number between 1 and 12
    var crystal2 = Math.floor(Math.random() * 12) + 1;

    //Create a random number between 1 and 12
    var crystal3 = Math.floor(Math.random() * 12) + 1;

    //Create a random number between 1 and 12
    var crystal4 = Math.floor(Math.random() * 12) + 1;

    //Function to test conditions of winning or losing
    function losing(){
        
        //If the score goes over the goal
        if (randomGoal < score){
            alert("You lose! Try again.");
            //Increment total losses
            lose++;
            //Sets the dom node equal to total losses
            document.getElementById("losses").innerHTML = lose;
            //Start the next round
            //setTimeout(function() { doItAll(); }, 5000);
            doItAll();
            //Set the dom node to reset the score
            score = 0;
            document.getElementById("my-score").innerHTML = score;
        }
        if (randomGoal == score){
            alert("You Win! Play Again!");
            //Increment total wins
            win++;
            //Sets the dom node equal to total wins
            document.getElementById("wins").innerHTML = win;
            //Start the next round
            doItAll();
            //Set the dom node to reset the score
            score = 0;
            document.getElementById("my-score").innerHTML = score;
        }
    }

    //if the first crystal image is clicked add its random number to the score and call the function to test for winning/losing
    document.getElementById("crystal1").addEventListener("click", function(){
        score = score+crystal1;
        document.getElementById("my-score").innerHTML = score;
        losing();
    });

    //if the second crystal image is clicked add its random number to the score and call the function to test for winning/losing
    document.getElementById("crystal2").addEventListener("click", function(){
        score = score+crystal2;
        document.getElementById("my-score").innerHTML = score;
        losing();
    });

    //if the third crystal image is clicked add its random number to the score and call the function to test for winning/losing 
    document.getElementById("crystal3").addEventListener("click", function(){
        score = score+crystal3;
        document.getElementById("my-score").innerHTML = score;
        losing();
    });

    //if the fourth crystal image is clicked add its random number to the score and call the function to test for winning/losing
    document.getElementById("crystal4").addEventListener("click", function(){
        score = score+crystal4;
        document.getElementById("my-score").innerHTML = score;
        losing();
    });
}

