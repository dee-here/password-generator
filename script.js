// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare all variables to store user entries 
var passwordLength; //length of password
var includeUpperCase; //include upper case charcters
var includeLowerCase; //include lower case characters
var includeNumbers; //include numbers
var includeSpecialChars; //include special characters

//store all possible characters in this array.
var passwordCharacterOptions;
//stores the password characters
var passwordArray;


// define all the valid characters of the password and store them in separate arrays.  
// upper case, lower case, special character and numbers.
const upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseCharacters = upperCaseCharacters.map(char => char.toLowerCase());
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split(""); //split this string of special characters into an array using ""
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// create a function to get length of password from user 
function getPasswordLength() {
  passwordLength = prompt("Please specify Password length. \nMust be between 8 and 128");
  //convert passwordLength to number
  passwordLength = parseInt(passwordLength);
}


// alert user and restart generatePassword() function , if password length isnt between 8 and 128. 
function validatePasswordLength() {
  // check if password length is not between 8 and 128
  if (!(passwordLength && passwordLength >= 8 && passwordLength <=128)) {
    window.alert("Invalid password length. \nPassword length should be between 8 and 128 !! "); //alert the user for invalid input
    generatePassword(); // restart the process to generare password
  }
}

// save password criteria inputs from user into their variables
function getPasswordCriteria() {
  includeUpperCase = window.confirm("Include upper case characters in the password?");
  includeLowerCase = window.confirm("Include lower case characters in the password?");
  includeNumbers = window.confirm("Include numbers in the password?");
  includeSpecialChars = window.confirm("Include special characters in the password?");
}


//function to check if user has selected AT LEAST 1 of the types of characters to be included in password
function validatePasswordCriteria() {
  //if they are all false, its not a valid case !!
  if(!(includeUpperCase || includeLowerCase || includeNumbers || includeSpecialChars)) {
    window.alert("Invalid Password criteria. \nSelect at least one of the types of characters to be included in the password.");
    generatePassword();
  }
}

//reset all variables that store user input about password length and password criteria
function resetUserInputVariables() {
  passwordLength = undefined;
  includeUpperCase = undefined;
  includeLowerCase = undefined;
  includeNumbers = undefined;
  includeSpecialChars = undefined;
}

// Call functions here to get user input, validating inputs, generating password and returning password.
function generatePassword() {
  resetUserInputVariables()  //reset all user inputs
  getPasswordLength();
  validatePasswordLength();
  getPasswordCriteria();
  validatePasswordCriteria();
  combineValidChars();
  getPasswordCharacters();
  // avoid returning null,undefined and empty strings.
  // join the array with '' params to convert it to a string.
  return passwordArray.length > 0 ? passwordArray.join(''): ''; // if password array is not empty, create a string from the array and return it. else return '' string
}


//generate random index number  using length of the array that has all the possible options to be included in the password.
function randomIndexGenerator() {
  //Math.random returns a number between 0 and 1.
  //Math.floor rounds a number DOWN to the nearest integer
  return Math.floor(Math.random() * passwordCharacterOptions.length); //returns a number that is  >= 0, and  <= length of array containing all possible characters for password.
}

// generate an array with all possible characters that can be in the password based on user provided criteria
function combineValidChars() {
  //reset the passwordCharacterOptions 
  passwordCharacterOptions = [];
  //use spread operator to copy the characters, to be included in password into the passwordCharacterOptions array.
  if(includeUpperCase) {
    passwordCharacterOptions = [...upperCaseCharacters]; //add upper case characters into passwordCharacterOptions
  }
  if(includeLowerCase) {
    passwordCharacterOptions = [...passwordCharacterOptions, ...lowerCaseCharacters]; //add lower case characters
  }
  if(includeNumbers) {
    passwordCharacterOptions = [...passwordCharacterOptions, ...numbers]; //add numbers 
  }
  if(includeSpecialChars) {
    passwordCharacterOptions = [...passwordCharacterOptions, ...specialCharacters]; //add special characters
  }
}

// pick random characters from passwordCharacterOptions to be used in password.
// in each loop run, push one random character from the passwordCharacterOptions into the password array.
function getPasswordCharacters() {
  // Reset the passwordArray
  passwordArray = [];
  //loop runs for as many times as the password length
  for (i = 0; i < passwordLength; i++) {
    //push 1 randomn character from passwordCharacterOptions into passwordArray
    passwordArray.push(passwordCharacterOptions[randomIndexGenerator()]);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
