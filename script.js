document.getElementById("fullName").addEventListener("input", validateName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("phone").addEventListener("input", validatePhone);
document.getElementById("password").addEventListener("input", validatePassword);
document
  .getElementById("confirmPassword")
  .addEventListener("input", validateConfirmPassword);

function validateName() {
  const fullName = document.getElementById("fullName").value;
  const nameError = document.getElementById("nameError");

  if (fullName.length < 5) {
    nameError.textContent = "Name must be at least 5 characters long";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");

  if (!email.includes("@")) {
    emailError.textContent = "Enter a valid email address";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePhone() {
  const phone = document.getElementById("phone").value;
  const phoneError = document.getElementById("phoneError");

  if (phone === "1234567890" || phone.length !== 10 || isNaN(phone)) {
    phoneError.textContent = "Enter a valid 10-digit phone number";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const fullName = document.getElementById("fullName").value;
  const passwordError = document.getElementById("passwordError");

  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password.toLowerCase() === fullName.toLowerCase()
  ) {
    passwordError.textContent =
      'Password must be at least 8 characters long and should not be "password" or your name';
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    alert("Form submitted successfully!");
    return true;
  } else {
    alert("Please correct the errors in the form.");
    return false;
  }
}
