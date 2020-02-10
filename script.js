const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function checkRequired(input){
    input.forEach(input => {
        if(input.value === ""){
            showError(input, `${input.id} is required`);
        }else{
            showSuccess(input);
        }
    });
}


function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    checkRequired([username, email, password, password2]);
});
  