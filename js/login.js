//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address inside the email input field
    // always remeber to use .value to get text from an input field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   //step-3: get password from password field
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;
   //danger: do not varify email & password on the client side
   //step-4: varify email & password temporary
   if(email === '' && password === ''){
    alert('Please type your email & password')
   }
   else if(email === 'sujon@gmail.com' && password === 'nazmul'){
    window.location.href = "bank.html";
;
   }
   else{
    alert('Invalid User');
   }
   
})



