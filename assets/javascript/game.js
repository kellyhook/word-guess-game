//https://www.youtube.com/watch?v=tbLCMFp9QK4

startGame();

var randomWordArr = ['Tyrannosaurus', 'Stegosaurus', 'Velociraptor'];

//choose random word from the dino array
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

var s;
var count = 0;

//empty array for the Guesses
var answerArray = [];

// function to match the array with the same letter hashes from randomWordArr

function startGame(){
  for (var i = 0; i < randomWord.length;i++){
    answerArray[i] = "_";
  }

  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}

function Letter(){
    //get the letter typed in the box
    var letter = document.getElementById("letter").value;

    //make sure we have a guess(can add more checks liek only letters, etc)
    if (letter.length>0)
    {
      for (var i =0; i < randomWord.length; i++){
        if (randomWord[i] === letter)
        {
            //assign it to letter
          answerArray[i] = letter;
        }
      }

      count++;
      document.getElementbyId("counter").innerHTML = " Attempts: " + count;
      document.getElementbyId("answer").innerHTML = answerArray.join(" ");
    }
  }
