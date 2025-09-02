const form = document.getElementById('registrationForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorDiv = document.getElementById('error');
form.addEventListener('submit', function(e) {
    errorDiv.textContent = '';

    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        errorDiv.textContent = 'Паролі не співпадають';
    }
});
document.getElementById("registrationForm").addEventListener("submit", function(e){
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    const error = document.getElementById("error");

    if(password !== confirm){
        e.preventDefault();
        error.textContent = "Паролі не співпадають";
    } else {
        error.textContent = "";
    }
});