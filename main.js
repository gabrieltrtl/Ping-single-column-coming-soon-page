const form = document.querySelector('.hero__form');
console.log(form);
const emailInput = document.querySelector('#email');
console.log(emailInput);
const error = document.querySelector('.form__error');
console.log(error);

form.addEventListener('submit', event => {
  console.log("Função Submit OK");
  if (!emailInput.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  console.log("Função showError ok");
  if (emailInput.validity.valueMissing) {
    error.textContent = "The field cannot be empty";
  } else if (email.validity.typeMismatch) {
    error.textContent = "Oops! Please check your email";
  }
};
