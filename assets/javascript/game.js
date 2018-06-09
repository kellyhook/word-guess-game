var randomWordArr = ['Tyrannosaurus', 'Stegosaurus', 'Velociraptor'];

//choose random word from the dino array
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

var s;
var count = 0;

var answerArray = [];


function startGame() {
  console.log("here");
  // Set up the answer array
  for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
  }

  s = answerArray.join(" ");
  console.log(s);
  document.getElementById("answer").innerHTML = s;
}

function Letter() {
  //get the letter typed in the box
  var letter = document.getElementById("letter").value;

  //make sure we have a guess(can add more checks liek only letters, etc)
  if (letter.length > 0) {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === letter) {
        //assign it to letter
        answerArray[i] = letter;
      }
    }

    count++;
    document.getElementById("counter").innerHTML = "No. of clicks " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
}
console.log("there");
startGame();