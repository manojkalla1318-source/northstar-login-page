const form = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const message = document.querySelector('#message');
const togglePassword = document.querySelector('#toggle-password');

togglePassword.addEventListener('click', () => {
  const showing = passwordInput.type === 'text';
  passwordInput.type = showing ? 'password' : 'text';
  togglePassword.textContent = showing ? 'Show' : 'Hide';
  togglePassword.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.classList.remove('success');

  if (!emailInput.value.trim() || !passwordInput.value) {
    message.textContent = 'Please enter your email address and password.';
    return;
  }
  if (!emailInput.validity.valid) {
    message.textContent = 'Please enter a valid email address.';
    emailInput.focus();
    return;
  }

  if (emailInput.value.trim().toLowerCase() === 'demo@example.com' && passwordInput.value === 'password123') {
    message.textContent = 'Signed in successfully! Welcome to Northstar.';
    message.classList.add('success');
  } else {
    message.textContent = 'Email or password is incorrect. Try the demo credentials below.';
  }
});

document.querySelector('#forgot-link').addEventListener('click', (event) => {
  event.preventDefault();
  message.classList.remove('success');
  message.textContent = 'Password reset is not connected in this demo.';
});
document.querySelector('#signup-link').addEventListener('click', (event) => {
  event.preventDefault();
  message.classList.remove('success');
  message.textContent = 'Account creation is not connected in this demo.';
});
