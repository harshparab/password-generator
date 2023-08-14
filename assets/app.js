const generateBtn = document.querySelector(".password-button");
const passwordOneText = document.querySelector(".password-one");
const passwordTwoText = document.querySelector(".password-two");

function generatePassword() {
  const length = 12; // Change this to your desired password length
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

function displayPassword() {
  const newPasswordOne = generatePassword();
  const newPasswordTwo = generatePassword();
  passwordOneText.textContent = newPasswordOne;
  passwordTwoText.textContent = newPasswordTwo;
}

generateBtn.addEventListener("click", displayPassword);
