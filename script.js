// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare all variables to store user prompt/inputs
var passwordLength;
var includeUpperCase;
var includeLowerCase;
var includeNumbers;
var includeSpecialChars;


// define all the sub parts of the pssword.  upper case. lower case, special characters, numbers
const upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseCharacters = upperCaseCharacters.map(char => char.toLowerCase());

console.log("lowerCaseCharacters ", lowerCaseCharacters);
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log("specialCharacters ", specialCharacters);

// line 4
// declare method generate password

function generatePassword() {
  passwordLength = prompt("Please specify the length of the password, between 8 to 32 characters");
  alert(`Password length is: ${passwordLength}`);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




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

Math.floor(Math.random() * 10); //("number of chars in paswd"));
console.log();

