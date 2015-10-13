/****************************************** Credits ******************************************
Arturo Avilés Castellanos
Yael Araizaga Yerid Gracia
**********************************************************************************************/

// Create automata
function createAutomata(word){
	// Array con las letras de la palabra en cada casilla
	// Example:
	// Palabra: Arturo
	// ["a","r","t","u","r","o"]
	var transitions = word.split('');
	
	// Array con letras de modo creciente
	// ["a","ar","art","artu","artur","arturo"]
	var states = [];
	for(var i = 1; i <= word.length; i++){
		var state = word.slice(0,i);
		states.push(state);
	}

	// Creating an object named automata w/ states and transitions
	var automata = {
		states: states,
		transitions: transitions
	}

	return automata;
}

// Create Tape
function input(text){
	var chars = text.split('');

	return chars;
}

function operation(automata, input){

}

// Verify if the word to search is in the ASCII Symbols // Extra function
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
var automata = createAutomata(searchWord);

// Make the textArea an Array of chars
var input = input(textArea);

// Make it work!
operation(automata,input);          //


// End of program
console.log('The program ended correctly');