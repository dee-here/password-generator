// Assignment Code
var generateBtn = document.querySelector("#generate");

// declare all variables to store user entries
var passwordLength; //length of password
var includeUpperCase; //include upper case charcters
var includeLowerCase; //include lower case characters
var includeNumbers; //include numbers
var includeSpecialChars; //include special characters

// store all possible characters in this array, top be used to genrate a new passowrd
var passwordCharacterOptions;
// stores the password as a character array
var passwordArray;

// define all the valid characters of the password and store them in separate arrays.
// upper case, lower case, special character and numbers.
const upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// convert upper case character array to lower case.
const lowerCaseCharacters = upperCaseCharacters.map((char) =>
  char.toLowerCase()
);

// split a string of all special characters into an array using ""
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

// numerical characters
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// function to get length of password from user
function getPasswordLength() {
  passwordLength = prompt(
    "Please specify Password length. \nMust be a number between 8 and 128"
  );
  // convert passwordLength to number
  passwordLength = parseInt(passwordLength);
}

// check password length is  between 8 and 128
function isValidPasswordLength() {
  return (passwordLength >= 8 && passwordLength <= 128);
}

// validate password length input
function validatePasswordLength() {
  // check if password length is valid
  if (isValidPasswordLength()) {
    return true;
  } else {
    // alert the user for invalid password length
    window.alert("Invalid password length. \nPassword length should be between 8 and 128. \nTry again.");
    return false;
  }
}

// save password criteria inputs from user into their variables  ok: true , cancel: false
function getPasswordCriteria() {
  includeUpperCase = window.confirm(
    "Include upper case characters in the password?"
  );
  includeLowerCase = window.confirm(
    "Include lower case characters in the password?"
  );
  includeNumbers = window.confirm("Include numbers in the password?");
  includeSpecialChars = window.confirm(
    "Include special characters in the password?"
  );
}

//function to check if user included at least one type of characters
function someCriteriaSelected() {
  //if no character type is true return true, else false;
  return (
    includeUpperCase ||
    includeLowerCase ||
    includeNumbers ||
    includeSpecialChars
  );
}

// function to validate Password Criteria
function validatePasswordCriteria() {
  //if no crietria is selecetd, its invalid input
  if (someCriteriaSelected) {
    return true;
  } else {
    //alert the user for invalid password criteria
    window.alert(
      "Invalid Password criteria. \nSelect at least one of the types of characters to be included in the password."
    );
    //restart the function to generate password.
    //generatePassword();
    return false;
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

// this function here calls all other functions:  get user input, validating inputs, generating password and returning password.
function generatePassword() {
  resetUserInputVariables(); //reset all user inputs
  getPasswordLength(); //get passsword length

  // continue to get password criteria if password length is valid
  if (validatePasswordLength()) {
    getPasswordCriteria(); // get password criteria
    //validate if user has selected at least one type of characters for password
    if (validatePasswordCriteria()) {
      combineValidChars(); // combine all characters types to be included for password
      getPasswordCharacters(); // get the characters of the password.
      // join the array with '' params to convert it to a string.
      return passwordArray.join(""); // create a string from the array and return it for display in text box
    }
  }
}

//generate random index number  using length of the array that has all the possible options to be included in the password.
function randomIndexGenerator() {
  //Math.random returns a number between 0 and 1.
  //Math.floor rounds a number DOWN to the nearest integer
  return Math.floor(Math.random() * passwordCharacterOptions.length); //returns a number that is  >= 0, and  <= length of array containing all possible characters for password.
}

// generate an array with all possible characters that can be in the password based on user criteria
function combineValidChars() {
  //reset the passwordCharacterOptions to prevent stale data
  passwordCharacterOptions = [];
  //use spread operator to copy the characters, to be included in password into the passwordCharacterOptions array.
  if (includeUpperCase) {
    passwordCharacterOptions = [...upperCaseCharacters]; //add upper case characters into passwordCharacterOptions
  }
  if (includeLowerCase) {
    //add lower case characters
    passwordCharacterOptions = [
      ...passwordCharacterOptions,
      ...lowerCaseCharacters,
    ];
  }
  if (includeNumbers) {
    //add numbers
    passwordCharacterOptions = [...passwordCharacterOptions, ...numbers];
  }
  if (includeSpecialChars) {
    //add special characters
    passwordCharacterOptions = [
      ...passwordCharacterOptions,
      ...specialCharacters,
    ];
  }
}

// pick characters from passwordCharacterOptions to be used in password.
// in each loop run, push one random character from the passwordCharacterOptions into the password array.
function getPasswordCharacters() {
  // reset the passwordArray
  passwordArray = [];
  // loop runs for as many times as the password length
  for (i = 0; i < passwordLength; i++) {
    //push 1 character from the passwordCharacterOptions array at the random index created by randomIndexGenerator()  into the passwordArray on each loop
    passwordArray.push(passwordCharacterOptions[randomIndexGenerator()]);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // only display password in the text box if its not undefined
  if(!!password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
