let characters = '';
let upperCase = '';
let lowerCase = '';
let numeric = '';
let specialChar = '';
let password = [];

// onclick event for the generate button
document.getElementById('generate').addEventListener('click', passwordLength);

// function to collect user inputs
function passwordLength () {
    characters = prompt('How should the password be?  8-128 characters.');
    //confirm user input is between 8 and 128
    if ((characters >= 8) && (characters <=128)){
    passwordCriteria();
    }
    else {
    alert('Please enter a valid input.')
    }
    console.log('characters:', characters);
}

function passwordCriteria() {
    upperCase = confirm('Should the password contain upper case letters?');
    lowerCase = confirm('Should the password contain lower case letters?');
    numeric = confirm('Should the password contain numbers?');
    specialChar = confirm('Should the password contain special characters?');   
    console.log('upperCase:', upperCase);
    console.log('lowerCase:', lowerCase);
    console.log('numeric:', numeric);
    console.log('specialChar:', specialChar);

    //validate confirm input from user
    if ((upperCase === false) && 
        (lowerCase === false) && 
        (numeric === false) && 
        (specialChar === false)) {
        alert('Password must contain at least one character type')
    }
    else {
        //createPassword();
    }
}

password.length = characters
console.log('password.length' , password.length);