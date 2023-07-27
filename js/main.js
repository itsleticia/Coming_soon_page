const inputEmail = document.querySelector(".inputEmail");
const button = document.querySelector(".arrowButton");
const iconError = document.querySelector(".iconError");
const errorMsg = document.querySelector(".errorMsg");

button.addEventListener('click', (e) => {
    e.preventDefault();
    checkEmail();
});


function checkEmail() {
    var regex = /\S+@\S+\.\S+/;
    if (!regex.test(inputEmail.value)) {
        errorMsg.style.display = 'block';
        inputEmail.classList.add('inputInvalid');
        iconError.style.display = 'inline';
    } else {
        errorMsg.style.display = 'none';
        inputEmail.classList.remove('inputInvalid');
        iconError.style.display = 'none';
    }
}