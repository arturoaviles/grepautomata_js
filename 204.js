/* This is only for testing
// Array del texto
var chars = text.split(''); // This will allow to read char by char

// Array de la palabra
var word = word.split(''); // This will allow to compare it
*/

// Counters
var linesCounter = 1; // It will increase every time it detects a '\n'
var checkCounter = 0; // It will increase every time it detects a match
var line = ""; // It will add each character it founds. 
			   // If there is a '\n' (New Line) it resets

for (var i = 0; i <= chars.length(); i++){  
	line += chars[i];           // Add new char to the line
	if(chars[i]=='\n'){        
		line = "";              // New Line
		linesCounter++;         // ''   '' counter
	} 

	for(var j = 0; j<= word.length(); j++){
		if(chars[i]==word[j]) check++;				// Every char it matches increases +1
		else if(chars[i]=='\s'){
			if(check==word.length()){
				check = 0;                                // Resets 
				document.write(linesCounter+'<br>'+line+'</br>');
			}
		}             	
	}
}	

// Things to add:
// 1. Flag that turns on if there was a match, if true, and there are more matches
//    in the same line, it only prints it one time.
