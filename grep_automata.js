/****************************************** Credits ******************************************
Arturo Avilés Castellanos
Yael Araizaga Yerid Gracia
**********************************************************************************************/

// Create automata
function automata(word, text){
	//Array con las letras de la palabra en cada casilla
	// Example:
	// Palabra: Arturo
	// ["a","r","t","u","r","o"]
	var transitions = word.split('');
	
	//Array con letras de modo creciente
	// ["a","ar","art","artu","artur","arturo"]
	var states = [];
	for(var i = 1; i <= word.length; i++){
		var state = word.slice(0,i);
		states.push(state);
	}
}

// Verify if the word to search is in the ASCII Symbols
function isASCII(str) {
    return /^[\x00-\x7F]*$/.test(str);
}

// Start of the Program
console.log('The program started');

// Initial variables ------------------------------------------------------
var textArea = prompt('Paste the text in which you want to search for a word: ');

do{
	var searchWord = prompt('Write the word you want to search: ');
} while(!isASCII(searchWord)); // Verify if the next variable is in ASCII
// ------------------------------------------------------------------------ 

// Create an automata that accepts searchWord
automata(searchWord, textArea);

// End of program
console.log('The program ended correctly');