// step-1: add addEventListener to the deposit button 
// step-2: get the deposit value from the deposit input field 
// step-3: get the current deposit total (for non input element use innerText to get the text)

document.getElementById('btn-deposit').addEventListener('click',function(){ //setp-1
    
    const depositField = document.getElementById('deposit-field');  //step-2 
    const newDepositAmountStr = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountStr);
    //step-3
    const depositTotalElement = document.getElementById('deposit-total'); 
    const previousDepositTotalAmountStr = depositTotalElement.innerText;
    const previousDepositTotalAmount = parseFloat(previousDepositTotalAmountStr);
    depositTotalElement.innerText = newDepositAmount;
    depositField.value = ''; //clear depositField or inputField value
    //step 4
    const currenDepositTotal = previousDepositTotalAmount + newDepositAmount; 
    depositTotalElement.innerText = currenDepositTotal;
    //step-5
    const balanceTotalElement = document.getElementById('balance-total'); 
    const previousBalanceTotalAmountStr = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalAmountStr);
     //step-6
    const currentBalanceTotal = previousBalanceTotalAmount + newDepositAmount; 
    balanceTotalElement.innerText = currentBalanceTotal;
})