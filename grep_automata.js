/****************************************** Credits ******************************************
Arturo Avilés Castellanos A01372760
Yael Araizaga Yerid Gracia A01166495

Thanks to Dr. Salvador E. Venegas-Andraca
**********************************************************************************************/


/****************************************** Functions ****************************************/
// 1. Create Automata from WORD to be searched (Array).
// 2. Create Input form TEXT to be searched (Array).
// 3. Transition function that allows to search the WORD in the TEXT
// 4. isASCII is an extra feature to see if the chareacters of the WORD to be searched
//    is insde the ASCII list. Erase it if you want full search on haha. 

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
	var text = input;
	var word = automata.transitions;

<<<<<<< HEAD
	// Array del texto
	var chars = text.split(''); // This will allow to read char by char
	var lines = text.split('\n');
	
	// Array de la palabra
	var word = word.split(''); // This will allow to compare it
	
	// Counters
	var linesCounter = 1; // It will increase every time it detects a '\n'
	var checkCounter = 0; // It will increase every time it detects a match
	var flag = false; // This flag will turn true if it finds at least a match in a line
	
	// Read char by char in the TEXT
	for (var i = 0; i <= chars.length; i++){  
		if(chars[i]=='\n' || i == chars.length){
			if(flag){
				document.write("<br>"+linesCounter+" "+lines[linesCounter-1]);
				flag = false;
			}  
			linesCounter++;
		} 
		// Read char by char in the WORD
		for(var j = 0; j < word.length; j++){
			if(chars[i]!=word[j]){
				checkCounter = 0;
				break;
			}
			while(chars[i]==word[j]){
				checkCounter++;
				i++;
				j++;
			}
			if(checkCounter==word.length){
				flag = true;
			}
		}
	}
=======
var check = 0;
var linesCounter = 1; // It will increase every time it detects a '\n'
var checkCounter = 0; // It will increase every time it detects a match
var line = ""; // It will add each character it founds. 
			   // If there is a '\n' (New Line) it resets

//document.write('<br>'+automata.states.length+'</br>');
//document.write('<br>'+input.length+'</br>');
for (var i = 0; i < input.length; i++){  
	line += input[i];           // Add new char to the line
	if(input[i]=='\n'){     
		line = "";              // New Line
		linesCounter++;         // ''   '' counter
	} 

	document.write('<br>'+line+'</br>');	

	for(var j = 0; j<= automata.states.length; j++){
		if(input[i]==automata.states[j]){ 
			check++;
			document.write('<br>'+check+'</br>');
		}					// Every char it matches increases +1
		else if(input[i]=='\s'){
			if(check==automata.states.length){
				check = 0;                                // Resets 
				document.write(linesCounter+'<br>'+line+'</br>');
			}
		}             	
	}
}	

>>>>>>> 47e6e1d7f6f001028840033cbef8b90d07538f7e
}

// Verify if the word to search is in the ASCII Symbols // Extra function
function isASCII(str) {
    return /^[\x00-\x7F]*$/.test(str);
}

/**********************************************************************************************/

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

// Make it work!
operation(automata,textArea);          //

// End of program
console.log('The program ended correctly');