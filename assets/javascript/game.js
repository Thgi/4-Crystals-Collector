
//get the function ready  and create generateRandomnumber  
$(document).ready(function() {
  function generateRandomNumber(number1,number2) {
    return Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
  }
//the game start beginning again 
  function startNewGame(){
    random = generateRandomNumber(19,120);
    rand1 = generateRandomNumber(1,12);
    rand2 = generateRandomNumber(1,12);
    rand3 = generateRandomNumber(1,12);
    rand4 = generateRandomNumber(1,12);
    total = 0;
    $("#randomScore").text(random);
    $("#yourTotal").text(total);
  }
/*
  function checkForDuplicates(number1,number2,number3,number4){
    if (number1==number2){
      number2 = generateRandomNumber(1,12);
      checkForDuplicates(number1, number2);
    }
    else{
      return number2;
    }
  }
*/
  var total = 0;
  var wins = 0;
  var losses = 0;
  var random = generateRandomNumber(19,120);
  var rand1 = generateRandomNumber(1,12);
  var rand2 = generateRandomNumber(1,12);
  var rand3 = generateRandomNumber(1,12);
  var rand4 = generateRandomNumber(1,12);

  $("#win").text(wins);
  $("#loss").text(losses);
  $("#randomScore").text(random);

  $("#jewel").on("click", function() {
    total = rand1 + total;
    if (total > random){
      losses += 1;
      $("#loss").text(losses);
      startNewGame();
    }
    else if (total == random) {
      wins +=1;
      $("#win").text(wins);
      startNewGame();
    }
    else{
      $("#yourTotal").text(total);
    }
  });

  $("#crystal").on("click", function() {
    total = rand2 + total;
    if (total > random){
      losses += 1;
      $("#loss").text(losses);
      startNewGame();
    }
    else if (total == random) {
      wins +=1;
      $("#win").text(wins);
      startNewGame();
    }
    else{
      $("#yourTotal").text(total);
    }
  });

  $("#diamond").on("click", function() {
    total = rand3 + total;
    if (total > random){
      losses += 1;
      $("#loss").text(losses);
      startNewGame();
    }
    else if (total == random) {
      wins +=1;
      $("#win").text(wins);
      startNewGame();
    }
    else{
      $("#yourTotal").text(total);
    }
  });

  $("#sapphire").on("click", function() {
    total = rand4 + total;
    if (total > random){
      losses += 1;
      $("#loss").text(losses);
      startNewGame();
    }
    else if (total == random) {
      wins +=1;
      $("#win").text(wins);
      startNewGame();
    }
    else{
      $("#yourTotal").text(total);
    }
  });

});
