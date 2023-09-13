 var buttonColours = ["yellow", "green", "blue", "red" ];
 var gamePattern = [];
 var clickedPattern = [];
 var first = "true";
 var level = 0;
 var success = false;
 var i = 0;

alert("Welcome to Simon Says Memory Game");
alert("Rules: Every level a new tile will flash, click them in the order theyve appeared to progress.");

function nextSequence(){
    clickedPattern = [];
    level++;
    $("h1").text(level);
    var randomNumber = Math.floor(Math.random()*3);
    gamePattern.push(buttonColours[randomNumber]);
    $("#"+buttonColours[randomNumber]).fadeIn().fadeOut().fadeIn();
}


$("button").click(function(event){
    $("#" + this.id).fadeOut().fadeIn();
    var uInput = this.id;
    clickedPattern.push(uInput);
    checkAnswer(clickedPattern.length-1);
})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === clickedPattern[currentLevel]) {
        if (clickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
      }
    else {
        $("h1").text("failed, start over by pressing any key.");
        startOver();
    }
}


$(document).keypress(function(event){
    if (first == "true"){
        first = "false";
        nextSequence();
    }
})

function startOver() {
    level = 0;
    gamePattern = [];
    first = "true";
  }




