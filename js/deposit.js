
document.getElementById("btn-deposit").addEventListener("click", deposit);
// Enter key press events
document
  .getElementById("deposit-field") .addEventListener("keyup", function (event) {
    console.log(event);
    if (event.keyCode === 13){
     deposit(); 
    }
  });
