//If "Generate password button" pressed, then output random pw

//Click event, if button pressed, then perform this function


var characters = [
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
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    "!",
    "#",
    "$",
    "%",
    "*",
    "<",
    "=",
    ">",
    "?",
    "@",
    "&",
    "+"
 

 ].join('') ;

var digits = window.prompt("How many?");

//console.log(digits);
//prompt("How many characters would you like in your password?");

function randPassword(characters) {
    var result =[];
    for (var i = 0; i < digits; i++){
        result.push(characters[Math.floor(Math.random() * characters.length)]);
    }

    return result.join('');
    

 
  
       


    //return characters[Math.floor(Math.random() * characters.length)] 

}
    





 //   let i = 0;
//do {
  //i += digits;
  //return (i);
//} while (i < 180);
//}
//function randPassword(characters) {
    //var smooth = characters[Math.floor(Math.random() * characters.length)];
    
    //return smooth+smooth;
//}

 
//console.log(randPassword(characters));



function genPassword() {
    document.getElementById("password").innerHTML = randPassword(characters);
}


//console.log(characters.join(''));
























//function genPassword() {
  //document.getElementById("password").innerHTML = getRndInteger(0,10);
//}
//function getRndInteger(min, max) {
 //   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  //}


//Define function to create random number (start with just showing number "5" if button pressed)

//Output should include the following: 8 random letters, numbers, or symbols, some capital and some not


//The output will show in the text field

//If clear clipboard button pressed, the text field should disappear

