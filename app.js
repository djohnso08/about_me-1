'use strict';
var userName = prompt ('Pleaser Enter Your Name!')
console.log(userName);
if (userName === true) {
  alert('Thanks ' + userName + ', Let us begin. It is relatively painless.')
}

var hasDegree = prompt(userName + ' Do You Think I Have A College Degree?')
console.log(hasDegree);
if (hasDegree.toLowerCase(); === 'y' || hasDegree.toLowerCase(); === 'yes') {alert('That Is Correct, I Have An Edumacation');
}else if (hasDegree.toLowerCase(); === 'n' || hasDegree.toLowerCase(); === 'no'){alert('BZZZZZZT WRONG!, Move Along.');
}else {
  alert('Answer Input Is Invalid');
}
console.log(hasDegree);

var isFather = prompt(userName + ' Do You Think Am I A Father?')
console.log(isFather);
if (isFather.toLowerCase(); === 'y' || isFather.toLowerCase(); === 'yes') {alert('*Darth Vader Voice* Corrrect...');
}else if (isFather.toLowerCase(); === 'n' || isFather.toLowerCase(); === 'no') {alert('*Darth Vader Voice* ' + userName ' I mean... Luuuke I Am A Father... I Do Have A Kid.');
}else {
  alert('Answer Input Is Invalid');
}
console.log(isFather);

var militaryService = prompt(userName + ' Did I serve in the U.S. Military?')
console.log(militaryService);
if (militaryService.toLowerCase(); === 'y' || militaryService.toLowerCase(); === 'yes') {alert('AFFIRM! I Served In The Air Force.');
}else if (militaryService.toLowerCase(); === 'n' || militaryService.toLowerCase(); === 'no') {alert('Big Ole Negatory, HUA!');
}else {
  alert('Answer Input Is Invalid');
}
console.log(militaryService);

var livedHawaii = prompt('Did I Ever Live In Hawaii?')
console.log(livedHawaii);
if (livedHawaii.toLowerCase(); === 'y' || livedHawaii.toLowerCase(); === 'yes') {alert('Aloha! ' + userName + ' That Is Correct, I Even Speak Hawaiian Creole');
}else if (livedHawaii.toLowerCase(); === 'n' || livedHawaii.toLowerCase(); === 'no') {alert('As a matter of fact, I grew up there.');
}else {
  alert('Answer Input Is Invalid');
}
console.log(livedHawaii);

var challengeAccepted = prompt(userName + 'From What You Think You Know About Me, Am I Up For The Challenge Of Code Fellows!?')
console.log(challengeAccepted);
if (challengeAccepted === 'y' || challengeAccepted === 'yes') {alert('I Think I Can, I Think I Can...I Know I Can.');
}else if (challengeAccepted === 'n' || challengeAccepted === 'no') {alert('Oh Thee Of So Little Faith...');
}else {
  alert('Answer Input Is Invalid');
}
console.log(challengeAccepted);
