var currentSavingsAccount = 0;
var currentCheckingAccount = 0;

var savingsWithdrawBtn = document.getElementsByClassName('savingWithdrawBtn')[0];
var savingsDepositBtn = document.getElementsByClassName('savingDepositBtn')[0];
var checkingWithdrawBtn = document.getElementsByClassName('checkingWithdrawBtn')[0];
var checkingDepositBtn = document.getElementsByClassName('checkingDepositBtn')[0];
var inputSavings = document.getElementsByClassName('savingFigure')[0];
var inputChecking = document.getElementsByClassName('checkingFigure')[0];
var savingBalance = document.getElementsByClassName('balanceSavings')[0];
var checkingBalance = document.getElementsByClassName('balanceChecking')[0];
var colorBackChange1 = document.getElementsByClassName('savings')[0];
var colorBackChange2 = document.getElementsByClassName('checking')[0];

var bgRedColor = function(){
  colorBackChange1.style.backgroundColor = 'rgba(206,4,34, 0.8)';
  colorBackChange2.style.backgroundColor = 'rgba(206,4,34, 0.8)';
}
var bgDefaultColor = function(){
  colorBackChange1.style.backgroundColor = 'rgba(255,255,255,0.8)';
  colorBackChange2.style.backgroundColor = 'rgba(255,255,255,0.8)';
}

var savingWithdraw = function(){

  var amountWithdraw = userInputSavings();

  currentSavingsAccount = currentSavingsAccount - amountWithdraw;
  savingBalanceUpdate(currentSavingsAccount);
}

var savingDeposit = function(){

  var amountDeposit = userInputSavings();

  currentSavingsAccount = currentSavingsAccount + amountDeposit;
  savingBalanceUpdate(currentSavingsAccount);
}

var checkingWithdraw = function(){

  var amountWithdraw = userInputChecking();

  currentCheckingAccount = currentCheckingAccount - amountWithdraw;
  checkingBalanceUpdate(currentCheckingAccount);
}

var checkingDeposit = function(){

  var amountDeposit = userInputChecking();

  currentCheckingAccount += amountDeposit;
  checkingBalanceUpdate(currentCheckingAccount);
}

var savingToCheck = function(){

  var amountWithdraw = userInputSavings();

  if(amountWithdraw <= currentCheckingAccount){
    currentCheckingAccount = currentCheckingAccount - amountWithdraw;
    checkingTextUpdate(currentCheckingAccount);
  }else{
    currentSavingsAccount = 0;
  }
}

var checkToSaving = function(){

  var amountWithdraw = userInputChecking();

  if(amountWithdraw <= currentSavingsAccount){
    currentSavingsAccount = currentSavingsAccount - amountWithdraw;
    savingTextUpdate(currentSavingsAccount);
  }else{
    currentCheckingAccount = 0;
  }
}

var savingBalanceUpdate = function(amount){

  var newSavingBalance = amount;

  if(newSavingBalance>=0){
    savingTextUpdate(newSavingBalance);
    bgDefaultColor();
  }else if(currentSavingsAccount<=0 && currentCheckingAccount<=0){
    notEnoughFundsReset();
    bgRedColor();
  }else if(newSavingBalance<0 && currentCheckingAccount>0){
    savingToCheck();
    bgDefaultColor();
  }
}

var checkingBalanceUpdate = function(amount){

  var newCheckBalance = amount;

  if(newCheckBalance>=0){
    checkingTextUpdate(newCheckBalance);
    bgDefaultColor();
  }else if(currentSavingsAccount<=0 && currentCheckingAccount<=0){
    notEnoughFundsReset();
    bgRedColor();
  }else if(newCheckBalance<0 && currentSavingsAccount>0){
    checkToSaving();
    bgDefaultColor();
  }
}

var userInputSavings = function(){
  var userInputValue = Number(inputSavings.value);
  return userInputValue;
}

var userInputChecking = function(){
  var userInputValue = Number(inputChecking.value);
  return userInputValue;
}

var notEnoughFundsReset = function(){
  savingBalance.textContent = 'Inadequate Funds';
  checkingBalance.textContent = 'Inadequate Funds'
  currentSavingsAccount = 0;
  currentCheckingAccount = 0;
}

var checkingTextUpdate = function(newBalance){
  checkingBalance.textContent = '$' + newBalance.toFixed(2);
}
var savingTextUpdate = function(newBalance){
  savingBalance.textContent = '$' + newBalance.toFixed(2);
}

savingsWithdrawBtn.addEventListener('click', function(){
  savingWithdraw();
});

savingsDepositBtn.addEventListener('click', function(){
  savingDeposit();
});

checkingWithdrawBtn.addEventListener('click', function(){
  checkingWithdraw();
});
checkingDepositBtn.addEventListener('click', function(){
  checkingDeposit();
});
