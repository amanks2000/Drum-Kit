
for (var i = 0; i < 7; i++) {

  var button = document.querySelectorAll(".drum")[i];
  button.addEventListener("click", function() {
    this.style.color = "white";
  }); // addEventListener is an higher order Function that can take other fucntions as input
}


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSounds(buttonInnerHTML);

    buttonAnimatio(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSounds(event.key);

  buttonAnimatio(event.key);

});

function makeSounds(str) {
  switch(str) {
    case "w" :
      var sound_w = new Audio("sounds/tom-1.mp3");
      sound_w.play();
      break;

    case "a" :
      var sound_a = new Audio("sounds/tom-2.mp3");
      sound_a.play();
      break;

    case "s" :
      var sound_s = new Audio("sounds/tom-3.mp3");
      sound_s.play();
      break;

    case "d" :
      var sound_d = new Audio("sounds/tom-4.mp3");
      sound_d.play();
      break;

    case "j" :
      var sound_j = new Audio("sounds/snare.mp3");
      sound_j.play();
      break;

    case "k" :
      var sound_k = new Audio("sounds/crash.mp3");
      sound_k.play();
      break;

    case "l" :
      var sound_l = new Audio("sounds/kick-bass.mp3");
      sound_l.play();
      break;

    default :
      break;
  }
}

function buttonAnimatio(key) {

  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100); // This setTimeout function will run the code in the block after 100 ms (0.1 s)

}


// // Detecting key press
// document.addEventListener("keypress", function(event) {
//   makeSounds(event.key);
// });
//
// for (var j = 0; j < 7; j++) {
//
//   // Detecting button presse
//   var button = document.querySelectorAll(".drum")[i];
//   button.addEventListener("click", function() {
//     var x = button.innerHTML;
//     makeSounds(x);
//   });
// }
