// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  let confirmCharacters = prompt ("How many characters does your password need to be?");

if (confirmCharacters >= 8);

else if (confirmCharacters <=7) {
 alert("Character length must be more than 8!");
}
else if (confirmCharacters >=128) {
 alert("Character Length Must Be 8-128!");
}

//let confirmLowercase = confirm("Would you like lowercases characters?");
  //if (confirmLowercase === true) 


let confirmUppercase = confirm ("Would you like uppercases characters?");
let confirmNumeric = confirm ("Would you like numeric characters?");
let confirmSpecialCharacters = confirm ("Would you like special characters?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


