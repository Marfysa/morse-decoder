const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let result = '';
    let str = [];
    let arr = expr.split('');
    let i = 0;
    
    for (let i = 0; i<arr.length; i = i+2){
        let symbol = arr[i]+arr[i+1];
        if (symbol == '00') {
         str.push(' ');
        } else if (symbol == '10') {
         str.push('.');
        } else if (symbol == '11') {
         str.push('-');
        } else if (symbol == '**') {
          str.push('**');
        }
        
      }
      result = str.join('');
      
      let Array = [];

      for (let j = 0; j < result.length; j = j+5) {
        let Arr5 = result.slice(j, j+5);
        Array.push(Arr5);
     
      }
      
    let end = [];

    Array.forEach(e => {
      e = e.replace(/ /g, '')
      if(e !== '*****') {
        end.push(MORSE_TABLE[e])
      } else {
        end.push(' ')
      }
    })
   
    return end.join('').replace(/  /g, ' ')
}

module.exports = {
    decode
}
