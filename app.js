'use strict';
// Try not to change user input directly. Manipulate the variable data as needed.

var hasDegree = prompt('Do You Think I Have A College Degree?').toLowerCase();
console.log(hasDegree);
if (hasDegree === 'y' || hasDegree === 'yes') {alert('That Is Correct, I Have An Edumacation');
}else if (hasDegree === 'n' || hasDegree === 'no'){alert('BZZZZZZT WRONG!, Move Along.');
}else {
  alert('Answer Inputed Is Invalid');
}

var isFather = prompt('Am I A Father?').toLowerCase();
console.log(isFather);
if (isFather === 'y' || isFather === 'yes') {alert('*Darth Vader Voice* Corrrect...');
}else if (isFather === 'n' || isFather === 'no') {alert('*Darth Vader Voice* Luuuke I Am A Father... I Do Have A Kid.');
}else {
  alert('Answer Inputed Is Invalid');
}

var militaryService = prompt('Did I serve in the U.S. Military?').toLowerCase();
console.log(militaryService);
if (militaryService === 'y' || militaryService === 'yes') {alert('AFFIRM! I Served In The Air Force.');
}else if (militaryService === 'n' || militaryService === 'no') {alert('Big Ole Negatory, HUA!');
}else {
  alert('Answer Inputed Is Invalid');
}

var livedHawaii = prompt('Did I Ever Live In Hawaii?').toLowerCase();
console.log(livedHawaii);
if (livedHawaii === 'y' || livedHawaii === 'yes') {alert('Aloha! That Is Correct, I Even Speak Hawaiian Creole');
}else if (livedHawaii === 'n' || livedHawaii === 'no') {alert('As a matter of fact, I grew up there.');
}else {
  alert('Answer Inputed Is Invalid');
}

var challengeAccepted = prompt('From What You Think You Know About Me, Am I Up For The Challenge Of Code Fellows!?').toLowerCase();
console.log(challengeAccepted);
if (challengeAccepted === 'y' || challengeAccepted === 'yes') {alert('I Think I Can, I Think I Can...I Know I Can.');
}else if (challengeAccepted === 'n' || challengeAccepted === 'no') {alert('Oh Thee Of So Little Faith...');
}else {
  alert('Answer Inputed Is Invalid');
}
