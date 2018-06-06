function alertRPS(event){

 if (event.key == 'r') {
  alert("Rock");
}else if (event.key == 'p') {
  alert("Paper");
}else if (event.key == 's') {
  alert("Scissors");
}
}

document.onkeyup = alertRPS;
