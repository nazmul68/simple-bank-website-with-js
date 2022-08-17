/*
1. add event handler with the withdraw button
2. get withdraw amount from withdraw input field
3. 
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
   // step-2
    const withdrawAmountField = document.getElementById('withdraw-field');
    const newWithdrawAmountStr = withdrawAmountField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountStr);
    withdrawAmountField.value = '';
   // step-3
    const withdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountStr = withdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountStr);
    // step-4
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawElement.innerText = currentWithdrawAmount;
    // step-5
    const balanceTotalElement = document.getElementById('balance-total'); 
    const previousBalanceTotalAmountStr = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalAmountStr);
    // step-6
    const newBlanaceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    balanceTotalElement.innerText = newBlanaceTotal;
    

})