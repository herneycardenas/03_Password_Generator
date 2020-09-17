// Assignment Code
let generateBtn = document.querySelector("#generate");

    //need values for lower/upper/numbers/special characters
let valueLowercase = "abcdefghijklmnopqrstuvwxyz"
let valueUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let valueNumber = "0123456789"
let valueSpecialCharacters = "~!@#$%^&*()_+"

let value = "";

// Write password to the #password input
function writePassword() {

value ="";
let confirmCharacters = prompt ("How many characters does your password need to be?");

if (confirmCharacters <=7 || confirmCharacters >= 129) {
  alert("Character length must be 8 - 128")
  return
}
else {
  confirmLowercase = confirm("Would you like lowercases characters?");
  confirmUppercase = confirm ("Would you like uppercases characters?");
  confirmNumber = confirm ("Would you like numeric characters?");
  confirmSpecialCharacters = confirm ("Would you like special characters?");

if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecialCharacters);
};

if (confirmLowercase) {
value += valueLowercase
};

if (confirmUppercase) {
value += valueUppercase
};

if (confirmNumber) {
value += valueNumber
};

if (confirmSpecialCharacters) {
value += valueSpecialCharacters
};

console.log(value);

let passwordText = document.querySelector("#password");
let password = "";

 for (i = 0; i < confirmCharacters; i++) {
   password = password + value.charAt(Math.floor(Math.random() * value.length))
  };

  console.log(password);

  passwordText.value = password;
 };


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

