
    //step-1: add event litsener to the diposit button
document.getElementById('btn-Withdraw').addEventListener('click', function(){

    // step-2: get the deposit amount from the deposit input field
    const depositfield = document.getElementById('withdraw-field');

    // step-3: withdraw ammount change string to number
    const newwithdrawammountstring = depositfield.value;
    const newwithdrawammount = parseFloat(newwithdrawammountstring);

    // step-4: get the current withdraw total and change string to number
    const withdrawtotalelemant = document.getElementById('withdraw-total');
    const previaswithdrawtotalstring = withdrawtotalelemant.innerText;
    const previaswithdrawtotal = parseFloat(previaswithdrawtotalstring);

    //step-5: add Number to set the total withdraw
    const currentwithdrawtotal = previaswithdrawtotal + newwithdrawammount;
    withdrawtotalelemant.innerText = currentwithdrawtotal;

    // ===================================================================================================

    // step-3: balance ammount change string to number
    // Balance 
    const newbalanceammountstring = depositfield.value;
    const newbalanceammount = parseFloat(newbalanceammountstring);

    // step-4: get the current balance total and change string to number
    // Balance
    const balancetotalelemant = document.getElementById('balance-total');
    const previasbalancetotalstring = balancetotalelemant.innerText;
    const previasbalancetotal = parseFloat(previasbalancetotalstring);

    //step-5: add Number to set the total balance 
    // Balance
    const currentbalancetotal = previasbalancetotal - newbalanceammount;
    balancetotalelemant.innerText = currentbalancetotal;
    
    // step-6: clear deposit field 
    depositfield.value = '';
})