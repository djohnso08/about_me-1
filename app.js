'use strict';
// Try not to change user input directly. Manipulate the variable data as needed.
// I likely should have done a else if statement for NO YES Easily rectified with else being anything else.
var hasDegree = prompt('Do You Think I Have A College Degree?').toLowerCase();
console.log(hasDegree);
if (hasDegree === 'y' || hasDegree === 'yes') {alert('That Is Correct, I Have An Edumacation');
}else {alert('BZZZZZZT WRONG!, Move Along.');
}

var isFather = prompt('Am I A Father?').toLowerCase();
console.log(isFather);
if (isFather === 'y' || isFather === 'yes') {alert('*Darth Vader Voice* Corrrect...');
}else {alert('*Darth Vader Voice* Luuuke I Am A Father... I Do Have A Kid.');
}

var militaryService = prompt('Did I serve in the U.S. Military?').toLowerCase();
console.log(militaryService);
if (militaryService === 'y' || militaryService === 'yes') {alert('AFFIRM! I Served In The Air Force.');
}else {alert('Big Ole Negatory, HUA!');
}

var livedHawaii = prompt('Did I Ever Live In Hawaii?').toLowerCase();
console.log(livedHawaii);
if (livedHawaii === 'y' || livedHawaii === 'yes') {alert('Aloha! That Is Correct, I Even Speak Hawaiian Creole');
}else {alert('As a matter of fact, I grew up there.');
}

var challengeAccepted = prompt('From What You Think You Know About Me, Am I Up For The Challenge Of Code Fellows!?').toLowerCase();
console.log(challengeAccepted);
if (challengeAccepted === 'y' || challengeAccepted === 'yes') {alert('I Think I Can, I Think I Can...I Know I Can.');
}else {alert('Oh Thee Of So Little Faith...');
}
