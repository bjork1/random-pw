
//Define array called characters with letters, numbers, and symbols
//Join function to remove commas from output

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


//Prompt to enter number of characters for password

var digits = window.prompt("How many?");


//Define function called randPassword(characters) to return number of characters entered in prompt
//Create random combination of characters 
//Join result to remove characters from output


function randPassword(characters) {
    
    var result =[];
    for (var i = 0; i < digits; i++){
        result.push(characters[Math.floor(Math.random() * characters.length)]);
    }

    return result.join('');
    

  }

//Define function genPassword to link click from HTML button
//Link with ID "password" to return in text box of HTML

function genPassword() {
    document.getElementById("password").innerHTML = randPassword(characters);
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


