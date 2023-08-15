
//step-1 add event handler with the sumbit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2 get the iput text of email 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
     // step-3 get the iput text of password
     const passwordField = document.getElementById('user-password');
     const password = passwordField.value;
     console.log(password);
    //  step-4 varify email and password
    if(email === 'shontanerbaba@gmail.com' && password === 'secrete' ){
        window.location.href = 'bank.html';
    }else{
        alert('pleas inter valid input')
    }
})