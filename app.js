const sign_in_password = document.querySelector("#password");
const submitButton = document.querySelector('#submit-button')

// list of must have at your password
const option_lower_upper = document.querySelector("#lower-upper");
const option_numbers = document.querySelector("#numbers");
const option_special_characters = document.querySelector("#special-character");
const option_digits = document.querySelector("#digits");

sign_in_password.addEventListener("keyup", (event) => {
  const { value } = sign_in_password

  const isNumberValidated = validateNumbersInPassword(value);
  changeClassesAttributes(option_numbers, isNumberValidated);
  
  const isSpecialCharactersValidated = validateSpecialCharacters(value);
  changeClassesAttributes(option_special_characters, isSpecialCharactersValidated);
  
  const isPasswordLengthValidated = validatePasswordLength(value);
  changeClassesAttributes(option_digits, isPasswordLengthValidated);
  
  const isLowerUpperCaseValidated = validateLowerUpperCase(value);
  changeClassesAttributes(option_lower_upper, isLowerUpperCaseValidated);

  const isValidated = isNumberValidated && 
    isSpecialCharactersValidated &&
    isPasswordLengthValidated &&
    isLowerUpperCaseValidated;
  
  ableDisableButton(isValidated);
  
});

function validateLowerUpperCase(password) {
  const upperRegex = RegExp("[A-Z]");
  const lowerRegex = RegExp("[a-z]");

  return password.match(upperRegex) && password.match(lowerRegex);
}

function validateNumbersInPassword(password) {
  var regex = /\d/g;

  return password.match(regex)
}

function validateSpecialCharacters(password) {
  var regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return password.match(regex);
}

function validatePasswordLength(password) {
  return password.length >= 8;
}

function changeClassesAttributes(liItem, isActive) {
  const icon = liItem.getElementsByTagName('i')[0];

  if(isActive) {
    liItem.classList.add('active');
    icon.classList.remove('fa-circle');
    icon.classList.add('fa-check');
  } else {
    liItem.classList.remove('active');
    icon.classList.add('fa-circle');
    icon.classList.remove('fa-check');
  }
}

function ableDisableButton(isFormValidated) {
  if (isFormValidated) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', '');
  }
  
}