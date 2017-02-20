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

var savingWithdraw = function(){

  var amountWithdraw = Number(inputSavings.value);

  currentSavingsAccount = currentSavingsAccount - amountWithdraw;
  savingBalanceUpdate(currentSavingsAccount);
}

var savingDeposit = function(){

  var amountDeposit = Number(inputSavings.value);

  currentSavingsAccount = currentSavingsAccount + amountDeposit;
  savingBalanceUpdate(currentSavingsAccount);
}

var checkingWithdraw = function(){

  var amountWithdraw = Number(inputChecking.value);

  currentCheckingAccount = currentCheckingAccount - amountWithdraw;
  checkingBalanceUpdate(currentCheckingAccount);
}

var checkingDeposit = function(){

  var amountDeposit = Number(inputChecking.value);

  currentCheckingAccount = currentCheckingAccount + amountDeposit;
  checkingBalanceUpdate(currentCheckingAccount);
}

var savingToCheck = function(){

  var inputFigure = Number(inputSavings.value);

  var amountWithdraw = Number(inputFigure.toFixed(2));

  if(amountWithdraw <= currentCheckingAccount){
    currentCheckingAccount = currentCheckingAccount - amountWithdraw;
    checkingTextUpdate(currentCheckingAccount);
  }else{
    currentSavingsAccount = 0;
  }
}

var checkToSaving = function(){

  var inputFigure = Number(inputChecking.value);

  var amountWithdraw = Number(inputFigure.toFixed(2));

  if(amountWithdraw <= currentSavingsAccount){
    currentSavingsAccount = currentSavingsAccount - amountWithdraw;
    savingTextUpdate(currentSavingsAccount);
  }else{
    currentCheckingAccount = 0;
  }
}

var savingBalanceUpdate = function(amount){

  var newSavingBalance = Number(amount.toFixed(2));

  if(newSavingBalance>=0){
    savingTextUpdate(newSavingBalance);
  }else if(currentSavingsAccount<=0 && currentCheckingAccount<=0){
    notEnoughFundsReset();
  }else if(newSavingBalance<0 && currentCheckingAccount>0){
    savingToCheck();
  }
}

var checkingBalanceUpdate = function(amount){

  var newCheckBalance = Number(amount.toFixed(2));
  
  console.log(newCheckBalance);

  if(newCheckBalance>=0){
    checkingTextUpdate(newCheckBalance);
  }else if(currentSavingsAccount<=0 && currentCheckingAccount<=0){
    notEnoughFundsReset();
  }else if(newCheckBalance<0 && currentSavingsAccount>0){
    checkToSaving();
  }
}

var notEnoughFundsReset = function(){
  savingBalance.textContent = 'Inadequate Funds';
  checkingBalance.textContent = 'Inadequate Funds'
  currentSavingsAccount = 0;
  currentCheckingAccount = 0;
}

var checkingTextUpdate = function(newBalance){
  checkingBalance.textContent = '$' + newBalance;
}
var savingTextUpdate = function(newBalance){
  savingBalance.textContent = '$' + newBalance;
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
