
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const rePasswordInput = document.getElementById('repassword');
const submitButton = document.getElementById('submit');

const nameRegex = /^[a-zA-Z\s]+$/;
const ageRegex = /^[0-9]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

function checkInputs() {
  const nameValid = nameRegex.test(nameInput.value);
  const ageValid = ageRegex.test(ageInput.value);
  const emailValid = emailRegex.test(emailInput.value);
  const phoneValid = phoneRegex.test(phoneInput.value);
  const passwordValid = passwordRegex.test(passwordInput.value);
  const rePasswordValid = passwordInput.value === rePasswordInput.value;

  if (nameValid && ageValid && emailValid && phoneValid && passwordValid && rePasswordValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

nameInput.addEventListener('input', checkInputs);
ageInput.addEventListener('input', checkInputs);
emailInput.addEventListener('input', checkInputs);
phoneInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);
rePasswordInput.addEventListener('input', checkInputs);
