// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m",'n","o","p","q',"r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","?","<",">"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword()
{
  alert("First, we need to determine your password criteria.");
  var lengthOfPass = prompt("How long would you like your password to be? P.S. It cannot be lower than 8 or higher than 128.");
  if(lengthOfPass < 8 || lengthOfPass > 128)
  {
    alert("That is not a valid length. Please pick a number between 8 and 128");
    generatePassword();
  }
  var charTypes = prompt("Now, type in the character types you'd like in your password, followed by a comma and a space ', '. The types of characters you can use are lowercase, uppercase, numeric, and special characters.")
  charTypes = charTypes.toString().toLowerCase();
  console.log(charTypes);
  for(var i = 0; i < charTypes.length; i++)
  {
    if(charTypes.includes("lowercase"))
    {
      
    }
  }
}
/*
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
