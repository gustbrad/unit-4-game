

//Function thats runs everything
function doItAll() {

     //Create a random number between 19 and 120
    var randomGoal = Math.floor(Math.random()*101+19);

    //Sets the dom node equal to the random goal
    $("#random-goal").text(randomGoal)
  
    //Create a random number between 1 and 12
    var crystal1 = Math.floor(Math.random() * 12) + 1;

    //Create a random number between 1 and 12
    var crystal2 = Math.floor(Math.random() * 12) + 1;
  
    //Create a random number between 1 and 12
    var crystal3 = Math.floor(Math.random() * 12) + 1;
  
    //Create a random number between 1 and 12
    var crystal4 = Math.floor(Math.random() * 12) + 1;
  
    //Variable to tally total wins
    var win = 0;

    //Variable to tally total losses
    var lose = 0;

    //Variable to tally score
    var score = 0;

    //Sets the dom node equal to total losses
    $("#losses").text(lose);

    //Sets the dom node equal to total wins
    $("#wins").text(win);

    //Sets the dom node equal to current score
    $("#my-score").text(score)
  
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
  
  //Restarts the game
  
  function restart(){
  
    //Create a random number between 19 and 120
    randomGoal = Math.floor(Math.random()*101+19);

    //Sets the dom node equal to the random goal
    $("#random-goal").text(randomGoal)
  
    //Create a random number between 1 and 12
    crystal1 = Math.floor(Math.random() * 12) + 1;

    //Create a random number between 1 and 12
    crystal2 = Math.floor(Math.random() * 12) + 1;
     
    //Create a random number between 1 and 12
    crystal3 = Math.floor(Math.random() * 12) + 1;
     
    //Create a random number between 1 and 12
    crystal4 = Math.floor(Math.random() * 12) + 1;
  
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    //Reset the score
    score = 0;
  
    //Sets the dom node equal to current score
    $("#my-score").text(score)
  
    } 
  function winLose(){

    //Keeps tally of the total wins
    if (randomGoal == score){
        //Alert user they won
        alert("You Win! Play Again!");
        //Increment total wins
        win++;
        //Sets the dom node equal to total wins
        $("#wins").text(win);
        //Call the restart function
        restart()
        
  }
  
  
  //Keeps tally of the total losses
  else if (randomGoal<score){

    //Alerts the user they lost
    alert("You lose! Try again.");
    //Increment total losses
    lose++;
    //Sets the dom node equal to total losses
    $("#losses").text(lose);
    //Calls the restart function
    restart()

  }
}
  
    //if the first crystal image is clicked add its random number to the score and call the function to test for winning/losing
      $("#crystal-1").on("click", function() {
        score = score+crystal1;
        $("#my-score").text(score)
        winLose();
    })
  
    //if the second crystal image is clicked add its random number to the score and call the function to test for winning/losing
    $("#crystal-2").on("click", function() {
        score = score+crystal2;
        $("#my-score").text(score)
        winLose();
    })
  
    //if the third crystal image is clicked add its random number to the score and call the function to test for winning/losing 
    $("#crystal-3").on("click", function() {
        score = score+crystal3;
        $("#my-score").text(score)
        winLose();
    })
  
  //if the fourth crystal image is clicked add its random number to the score and call the function to test for winning/losing
  $("#crystal-4").on("click", function() {
    score = score+crystal4;
    $("#my-score").text(score)
    winLose();
});
  

  
  }














  


  