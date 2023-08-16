
    //step-1: add event litsener to the diposit button  
document.getElementById('btn-Deposit').addEventListener('click', function(){

    // step-2: get the deposit amount from the deposit input field 
    const depositfield = document.getElementById('deposit-field');

    // step-3: deposit ammount change string to number
    // Deposit
    const newdepositammountstring = depositfield.value;
    const newdepositammount = parseFloat(newdepositammountstring);

    // step-4: get the current deposit total and change string to number
    // Deposit
    const diposittotalelemant = document.getElementById('deposit-total');
    const previasdeposittotalstring = diposittotalelemant.innerText;
    const previasdeposittotal = parseFloat(previasdeposittotalstring);

    //step-5: add Number to set the total deposit 
    // Deposit
    const currentdeposittotal = previasdeposittotal + newdepositammount;
    diposittotalelemant.innerText = currentdeposittotal;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
    const currentbalancetotal = newbalanceammount + previasbalancetotal;
    balancetotalelemant.innerText = currentbalancetotal;


    // step-6: clear deposit field 
    depositfield.value = '';
    
})