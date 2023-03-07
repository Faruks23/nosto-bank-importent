
document.getElementById("btn-withdraw").addEventListener("click", withdraw);

// Enter button  handler for
document.getElementById("withdraw-field")
  .addEventListener("keyup", function (event) {
    if (event.keyCode===13 || event.keyCode==16) {
       withdraw();
    }
  });
