function getInputFieldValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;

  const inputFieldValue = parseFloat(inputFieldValueString);
  if (isNaN(inputFieldValueString) || inputFieldValueString < 1) {
    alert("Please enter");
    return false;
  }
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
   return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  const set = textElement.innerText = newValue;
  return set;
}


// diposit funtion 
function deposit() {
  const getvalueinput = getInputFieldValueById("deposit-field");
  const getinnertext = getTextElementValueById("deposit-total");

  const newDepositTotal = getinnertext + getvalueinput;

  const getValue = getTextElementValueById("balance-total");
  const newBalanceTotal = getValue + getvalueinput;

  setTextElementValueById("deposit-total", newDepositTotal);

  setTextElementValueById("balance-total", newBalanceTotal);
}

// widthrewo funtion 


function withdraw() {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  const previousBalanceTotal = getTextElementValueById("balance-total");

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("baper banke ato taka nai");
    return false;
  }
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  setTextElementValueById("balance-total", newBalanceTotal);
}