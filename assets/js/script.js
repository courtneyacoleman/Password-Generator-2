let characters = '';
let upperCase = '';
let lowerCase = '';
let numeric = '';
let specialChar = '';
let password = [];
let final = '';

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
    if (upperCase === true) {
        password.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
    }
    lowerCase = confirm('Should the password contain lower case letters?');
    if (lowerCase === true) {
        password.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
    }
    numeric = confirm('Should the password contain numbers?');
    if (numeric === true) {
        password.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
    }
    specialChar = confirm('Should the password contain special characters?');  
    if (specialChar === true) {
        password.push('!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~')
    }
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
    createPassword();
}

console.log('password' , password);
console.log('char length', characters.length);
console.log('char value', characters.value);

function createPassword () {
    for (let i = 0; i < characters; i++){
        let rando = Math.floor(Math.random() * password.length);
        let choice= password[rando];
        console.log('choice', choice)
        console.log('rando', rando)
        final = final.concat(choice);
        //console.log('new string', newString)
        //final.concat(newString);
        console.log('final:', final)
        //console.log('newPass', newPass)
    }
    //alert(final);
    var showPassword = document.getElementById('password');
    showPassword.innerText = final;
}



