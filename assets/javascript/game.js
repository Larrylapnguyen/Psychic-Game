    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var score = 0;
    var losses = 0;
    var lives = 10;
    var yourGuess = [];
    
    document.getElementById("lives").innerHTML = lives;
    random();

    document.onkeypress = function(event) {
        var userGuess = event.key;
      if (userGuess == computerGuess) {
        score++;
        random();
        yourGuess=[];
      }else if(userGuess != computerGuess){
        lives--;
        var n = yourGuess.includes(userGuess);
        if(n== true){
          alert("You already tried that!");
          lives++;
        }else{
        yourGuess.push(userGuess);
        }
        if(lives == 0){
          lives = 10;
          losses++;
          yourGuess = [];
        }
      }
      document.getElementById("score").innerHTML = score;
      document.getElementById("lives").innerHTML = lives;
      document.getElementById("loss").innerHTML = losses;
      document.getElementById("yourGuess").innerHTML = yourGuess;
    }

    function random() {
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log(computerGuess );
    }

