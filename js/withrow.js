

    
    //step-1: add event litsener to the diposit button  
    document.getElementById('btn-Withdraw').addEventListener('click', function(){

        // step-2: get the deposit amount from the deposit input field 
        const withdrawfield = document.getElementById('withdraw-field');
    
        // step-3: deposit ammount change string to number
        // Deposit
        const newwithdrawammountstring = withdrawfield.value;
        const newwithdrawammount = parseFloat(newwithdrawammountstring);
    
        // step-4: get the current deposit total and change string to number
        // Deposit
        const withrawtotalelemant = document.getElementById('withdraw-total');
        const previaswithdrawtotalstring = withrawtotalelemant.innerText;
        const previaswithdrawtotal = parseFloat(previaswithdrawtotalstring);

        if(isNaN( newwithdrawammount)){
            alert('Pleas Input a Ammount')
            return;
        }
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        // step-6: clear deposit field 
        withdrawfield.value = '';

        if(newbalanceammount > previasbalancetotal){
            alert('Tomar Baper Bank a Etto Teha nai okay.......!!')
            return;
        }

        //step-5: add Number to set the total deposit 
        // Deposit
        const currentwithdrawtotal = previaswithdrawtotal + newwithdrawammount;
        withrawtotalelemant.innerText = currentwithdrawtotal;
    
        //step-5: add Number to set the total balance 
        // Balance
        const currentbalancetotal = previasbalancetotal - newbalanceammount;
        balancetotalelemant.innerText = currentbalancetotal;
    
    
        
        
    })