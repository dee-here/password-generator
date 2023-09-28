// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare all variables to store user prompt/inputs
var passwordLength;
var includeUpperCase;
var includeLowerCase;
var includeNumbers;
var includeSpecialChars;

var passwordCharacteroptions;
var passwordArray = [];


// define all the sub parts of the pssword.  upper case. lower case, special characters, numbers
const upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseCharacters = upperCaseCharacters.map(char => char.toLowerCase());

// console.log("lowerCaseCharacters ", lowerCaseCharacters);
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// console.log("specialCharacters ", specialCharacters);

// line 4
// declare method generate password

function generatePassword() {
  passwordArray = [];
  //this.printUserInputs();
  getUserInputs();
  printUserInputs();
  console.log("Password is : ", passwordArray, passwordArray.join());
  return passwordArray.join('');
  // passwordLength = prompt("Please specify the length of the password, between 8 to 32 characters");
  // alert(`Password length is: ${passwordLength}`);
  // console.log("Random index generated !!",Math.floor(Math.random() * passwordLength));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create a function to get user inputs 
function getUserInputs() {
  passwordLength = prompt("Please specify a Password length. \nBetween 8 to 32");
  this.validatePasswordLength();

}

// get password criiteria inputs
function getPasswordCriteria() {
  includeUpperCase = window.confirm("Include upper case characters ?");
  includeLowerCase = window.confirm("Include lower case characters ?");
  includeNumbers = window.confirm("Include numbers ?");
  includeSpecialChars = window.confirm("Include special characters ?");
  this.validatePasswordCriteria();

}


//create a function to check if user has selected AT LEAST 1 of the types of characters
function validatePasswordCriteria() {
  //if they are all false, its not a valid case !!
  if((includeUpperCase || includeLowerCase || includeNumbers || includeSpecialChars)) {
    
    // this.call method to create super set array of password !
    this.combineValidChars();
    //create password !
    this.getPasswordCharacters();
  } else {
    window.alert("Invalid Password criteria. \nSelect at least one of the types of characters to be included in the password. \nTry again !! ");
  }
}

//generate random index using passwordLength
function randomIndexGenerator() {
  var randomIndex = Math.floor(Math.random() * this.passwordCharacteroptions.length);
  console.log("randomIndex ", randomIndex);
  return randomIndex;

}

// generate password from critera
function combineValidChars() {
  passwordCharacteroptions = [];
  if(includeUpperCase) {
    passwordCharacteroptions = [...upperCaseCharacters];
  }
  if(includeLowerCase) {
    passwordCharacteroptions = [...passwordCharacteroptions, ...lowerCaseCharacters];
  }
  if(includeNumbers) {
    passwordCharacteroptions = [...passwordCharacteroptions, ...numbers];
  }
  if(includeSpecialChars) {
    passwordCharacteroptions = [...passwordCharacteroptions, ...specialCharacters];
  }
  console.log("ppasswordoptions: ", passwordCharacteroptions)
}

function getPasswordCharacters(){
  this.passwordArray = [];
  for(i=0; i< this.passwordLength; i++) {
    this.passwordArray.push(this.passwordCharacteroptions[this.randomIndexGenerator()]);
  }
  console.log("generated password: ", this.passwordArray, this.passwordArray.join(''));
}

// // create password
// function createPassword() {
//   this.passwordArray = [];
//   for(i=0; i<passwordLength; i++) {
//     console.log("loop ", i);
//     this.passwordArray.push(this.passwordCharacteroptions[this.randomIndexGenerator()]);
//     console.log("password ", passwordArray);
//   }
// }

// function abc() {
//   this.passwordArray = [];
  
// }

//function to create new pass 
// function abc() {
//   this.password = [];
//   for(i=0; i<passwordLength; i++) {
//     console.log("loop ", i);
//     this.password.push(this.passwordCharacteroptions[this.randomIndexGenerator()]);
//     console.log("password ", password);
// }

// function to print all user answers !!
function printUserInputs() {
  console.log("passwordLength: ",passwordLength);
  console.log("include upper: ", includeUpperCase);
  console.log("inclde lower: ", includeLowerCase);
  console.log("include number: ", includeNumbers);
  console.log("include special chars: ", includeSpecialChars);
}

// check if password length is between 8 and 32
function validatePasswordLength() {
  if ((passwordLength && passwordLength >= 8 && passwordLength <=32)) {
    //get password crietria !!
    this.getPasswordCriteria();
  } else {
    window.alert("Invalid password length. \nTry again !! ");
  }

}

// prompt user to input how many characters
// if input is between 8 and 128, we accept else, invalid response.
// Confirm whether user wants upper case characters
// Confirm whether user wants lower case characters
// Confirm whether user wants numbers
// Confirm whether user wants special characters

// User needs to select atleast  one of the above conditions !!
// IF user doesnt select any of the above rules, alert : At least one should be selected.


// store these responses in global vars

//store all upper case letters in a variable //
//store all lower case letters in a variable //cmd + shift + down array to copy last line and paste it to next !
//store all numbers case letters in a variable
//store all special chars in a variable
//store all upper case letters in a variable


//startr creating password !!
//create a string by combining all the options: upper case, lower case, numbers, special chars !!







//declare an empty array.
// push all the password into this array,- master password set !!
// create a string from this array !! --some method exists !





//how to build passwords !!

//random numbers 
// Math.floor();   //floor(0, 1) => 0;
// Math.random();  //

//Math.floor(Math.random() * 10); //("number of chars in paswd"));
