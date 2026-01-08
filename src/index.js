import './styles.css';

const form = document.querySelector('form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const postalCode = document.querySelector('#postalCode');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');
const success = document.querySelector('.success');

email.addEventListener('input', () => {
  email.setCustomValidity('');

  if (email.validity.valueMissing) {
    email.setCustomValidity("What? I can't see anything written there");
  } else if (!email.validity.valid) {
    email.setCustomValidity('So yeah... the email is not right');
  }

  email.reportValidity();
});

country.addEventListener('input', () => {
  country.setCustomValidity('');

  if (country.validity.valueMissing) {
    country.setCustomValidity('Can you tell me what is written there?');
  } else if (!country.validity.valid) {
    country.setCustomValidity('There is no such a country');
  }

  country.reportValidity();
});

postalCode.addEventListener('input', () => {
  postalCode.setCustomValidity('');

  if (postalCode.validity.valueMissing) {
    postalCode.setCustomValidity("It's blank...");
  } else if (postalCode.validity.tooShort) {
    postalCode.setCustomValidity("That's really short for a postal code");
  } else if (!postalCode.validity.valid) {
    postalCode.setCustomValidity("That is not a postal code, that's for sure");
  }

  postalCode.reportValidity();
});

password.addEventListener('input', () => {
  password.setCustomValidity('');

  if (password.validity.valueMissing) {
    password.setCustomValidity(
      "No password? You are brave! But i won't allow it, sorry :)"
    );
  } else if (password.validity.tooShort) {
    password.setCustomValidity(
      "That's really short to be a password. Do you wanna get hacked?"
    );
  } else if (!password.validity.valid) {
    password.setCustomValidity(
      'Seems like this cannot be a password... like at all'
    );
  }

  password.reportValidity();
});

passwordConfirmation.addEventListener('input', () => {
  passwordConfirmation.setCustomValidity('');

  if (password.value !== passwordConfirmation.value) {
    passwordConfirmation.setCustomValidity(
      "The passwords don't match! How could you forget you just entered that..."
    );
  }

  passwordConfirmation.reportValidity();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
  }

  showSuccessMessage();  
});


function showSuccessMessage() {
  success.textContent = 'You did it!';
  success.classList.add('visible');
}