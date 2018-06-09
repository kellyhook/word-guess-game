var randomWordArr = ['tyrannosaurus', 'petrodayctal', 'triceratops'];

//choose random word from the dino array
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
var s;
var count = 0;

var answerArray = [];
var correctGuesses = [];


function startGame() {
  // Set up the answer array
  for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";

  }

  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}

function getLetter() {
  // alert('hi')
  //get the letter typed in the box
  var letter = document.getElementById("letter").value;

  //make sure we have a guess(can add more checks liek only letters, etc)
  if (letter.length > 0) {

    if (randomWord.indexOf(letter) != -1) {
      correctGuesses.push(letter);
    }

    //rebuild what gets displayed
    var display = "";

    for (var i = 0; i < randomWord.length; i++) {
      if (correctGuesses.indexOf(randomWord[i]) != -1) {
        //assign it to letter
        display = display + randomWord[i];
      } else {
        display = display + " _ ";
      }
    }

    if (display == randomWord) {
      document.querySelector('#dinosaur').setAttribute('src', "assets/images/" + randomWord + '.png')
    }

    document.getElementById("answer").innerHTML = display;

    count++;
    document.getElementById("counter").innerHTML = "No. of clicks " + count;
    document.getElementById("letter").value = "";

  }
}

startGame();




// ----- original code. HTML was updated in function Letter
// var randomWordArr = ['Tyrannosaurus', 'Stegosaurus', 'Velociraptor'];
//
// //choose random word from the dino array
// var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
//
// var s;
// var count = 0;
//
// var answerArray = [];
//
//
// function startGame() {
//   // Set up the answer array
//   for (var i = 0; i < randomWord.length; i++) {
//     answerArray[i] = "_";
//   }
//
//   s = answerArray.join(" ");
//   document.getElementById("answer").innerHTML = s;
// }
//
// function Letter() {
//   //get the letter typed in the box
//   var letter = document.getElementById("letter").value;
//
//   //make sure we have a guess(can add more checks liek only letters, etc)
//   if (letter.length > 0) {
//     for (var i = 0; i < randomWord.length; i++) {
//       if (randomWord[i] === letter) {
//         //assign it to letter
//         answerArray[i] = letter;
//       }
//     }
//
//     count++;
//     document.getElementById("counter").innerHTML = "No. of clicks " + count;
//     document.getElementById("answer").innerHTML = answerArray.join(" ");
//
//     document.getElementById("letter").value = "";
//   }
// }
//
// startGame();
//
//
//
//