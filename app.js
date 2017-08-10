'use strict';

var myScore = 0;

function userNameFunction() {
  var userName = prompt ('Please Enter Your Name!');
  console.log(userName);
  if (userName === true) {
    alert('Thanks ' + userName + ', Let us begin. It is relatively painless.');
  }
}
userNameFunction();

var hasDegree = prompt(userName + ' Do You Think I Have A College Degree?');
console.log(hasDegree);
if (hasDegree.toLowerCase() === 'y' || hasDegree.toLowerCase() === 'yes') {
  alert('That Is Correct, I Have An Edumacation');
  myScore++;
}else if (hasDegree.toLowerCase() === 'n' || hasDegree.toLowerCase() === 'no'){
  alert('BZZZZZZT WRONG!, Move Along.');
}else {
  alert('Answer Input Is Invalid');
}

var isFather = prompt(userName + ' Do You Think Am I A Father?');
console.log(isFather);
if (isFather.toLowerCase() === 'y' || isFather.toLowerCase() === 'yes') {
  alert('*Darth Vader Voice* Corrrect...');
  myScore++;
}else if (isFather.toLowerCase() === 'n' || isFather.toLowerCase() === 'no') {
  alert('*Darth Vader Voice* ' + userName + ' I mean... Luuuke I Am A Father... I Do Have A Kid.');
}else {
  alert('Answer Input Is Invalid');
}

var militaryService = prompt(userName + ' Do You Think I Served in the U.S. Military?');
console.log(militaryService);
if (militaryService.toLowerCase() === 'y' || militaryService.toLowerCase() === 'yes') {
  alert('AFFIRM! I Served In The Air Force.');
  myScore++;
}else if (militaryService.toLowerCase() === 'n' || militaryService.toLowerCase() === 'no') {
  alert('Big Ole Negatory, HUA!');
}else {
  alert('Answer Input Is Invalid');
}

var livedHawaii = prompt('Did I Ever Live In Hawaii?');
console.log(livedHawaii);
if (livedHawaii.toLowerCase() === 'y' || livedHawaii.toLowerCase() === 'yes') {
  alert('Aloha! ' + userName + ' That Is Correct, I Even Speak Hawaiian Creole');
  myScore++;
}else if (livedHawaii.toLowerCase() === 'n' || livedHawaii.toLowerCase() === 'no') {
  alert('As a matter of fact, I grew up there.');
}else {
  alert('Answer Input Is Invalid');
}

var challengeAccepted = prompt(userName + ' From What You Think You Know About Me, Am I Up For The Challenge Of Code Fellows!?');
console.log(challengeAccepted);
if (challengeAccepted === 'y' || challengeAccepted === 'yes') {
  alert('I Think I Can, I Think I Can...I Know I Can.');
  myScore++;
}else if (challengeAccepted === 'n' || challengeAccepted === 'no') {
  alert('Oh Thee Of So Little Faith...');
}else {
  alert('Answer Input Is Invalid');
}

var placesLived = prompt ('Hey There! ' + userName + ' How Many Places Do You Think I Have Lived Besides Hawaii? You Have Four Guesses.');
console.log(placesLived);
for (var i = 0; i < 4; i++) {
  if (parseInt(placesLived) === 5) {
    alert('It is True, I Have Moved A Lot.');
    myScore++;
    break;
  }else if (parseInt(placesLived) < 5) {
    placesLived = prompt('I Have Lived In More Places, Please Try Again.');
  }else if (parseInt(placesLived) > 5) {
    placesLived = prompt('WHOOOAAAAA....Slow Your Roll, Less Places Than That. Please Try Again.');
  }else {
    alert('You Ran Out Of Tries, Dont Feel Too Bad I am A Complicated Person.');
  }
}

var bestVideoGames = ['skyrim', 'fallout', 'zelda', 'world of warcraft', 'wow', 'eve' ];
var videoGamesPrint = bestVideoGames.join(', ');
var userVideoGamePick = prompt('Oh.. hey! ' + userName + ' What Do You Think Is One Of The Best Video Games? You Have 6 Do Overs Before Game Over!');
console.log(userVideoGamePick);
for (var j = 0; j < 6; j++) {
  if (bestVideoGames.includes(userVideoGamePick.toLowerCase())) {
    alert('CORRECT! You Should Send A Friend Invite On Steam. By The Way I Kept Score. Your Options were ' + videoGamesPrint);
    myScore++;
    break;
  }else if (bestVideoGames.includes(userVideoGamePick.toLowerCase()) === false) {
    userVideoGamePick = prompt('Hey Dont Feel Bad Thats Why I Gave You 6 Lives.');
  }else if (j === 6){
    alert('GAME OVER' + videoGamesPrint + 'Were Your Options. Your Total Score Is ' + myScore);
  }
}
alert('Your High Score Is... ' + myScore);
