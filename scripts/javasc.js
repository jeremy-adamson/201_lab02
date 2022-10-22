'use strict';

// Purpose: To check if user input is one of the valid input values
// Input: String
// Output: Returns boolean value if input string is y/n/yes/no

function inputChecker(stringToCheck, acceptedAnswers){
    stringToCheck = stringToCheck.toLowerCase();

    return (acceptedAnswers.includes(stringToCheck));
}

// Purpose: To check if user input matches the correct answer
// Input: User provided answer as a string and the array of possibile correct answers
// Output: Provides user feedback and returns 1 on correct response, otherwise returns 0

function userFeedback(userResponse, correctAnswer){
    userResponse = userResponse.toLowerCase();

    if (correctAnswer.includes(userResponse)){
        alert('Correct!');
        return 1;
    }
    else{    
        alert('Incorrect! Boo!');
        return 0;
    }
}

// Setting up acceptable answer arrays
let affirmative = ['y', 'yes'];
let negative = ['n', 'no'];
let acceptedAnswers = affirmative.concat(negative);

let numberOfCorrect = 0;

// Array of questions to be asked
let questions = ['Do I like disc golf?',
                'Am I good at disc golf?',
                'Have I been a professional chef?',
                'Do I rockclimb?',
                'Is Halloween my favorite holiday?'];

// Answers corresponding to questions
let answers = [affirmative,
                negative,
                negative,
                affirmative,
                affirmative];

// Setup for number to guess section
// Currently set so a random number is generated in the specified range of 1 to numberRange
let numberRange = 20;
let numberToGuess = Math.ceil(Math.random() * numberRange);
let numberOfGuessesNum = 4;

// Setup for guessing if something is in a list section
let numberOfGuessesList = 6;
let acceptableDiscs = ['crave',
                        'spin',
                        'reactor'];


// Debug alert to check if there are the name number of questions as answers (TAG 200)
if (questions.length != answers.length){
    alert('FATAL ERROR - Number of questions does not match number of provided answers. TAG 200');
}

let userName = prompt('Hello! What is your name?');

// Main loop to cycle through the questions
for (let i = 0; i < questions.length;  i++){
    let ans = prompt(questions[i]);
    while (!inputChecker(ans, acceptedAnswers)){
        alert('Please provide a valid input y/n/yes/no');
        ans = prompt(questions[i]);
    }

    numberOfCorrect += userFeedback(ans, answers[i]);
}

for (let i = 0; i < numberOfGuessesNum; i++){
    let attempts = i + 1;
    let guessesLeft = numberOfGuessesNum - attempts;
    let ans = prompt('Please pick a number from 1 to ' + numberRange);

    ans = parseInt(ans);
    // Checking if there is an input within the proper range
    while (ans < 1 || numberRange < ans || !ans){
        alert('Provided input is not within the specified range, try again');
        ans = prompt('Please pick a number from 1 to ' + numberRange);
        ans = parseInt(ans);
    }

    // Checking if the number guessed is correct and gives feedback to user (TAG 300)
    if (ans === numberToGuess){
        alert('Congratulations!!! ' + numberToGuess + ' was the correct number and it took you ' + attempts + ' tries!');
        numberOfCorrect++;
        break;
    } else if (guessesLeft === 0){
        alert('Sorry, you didn\'t get it this time.  The correct answer was ' + numberToGuess);
    } else if (ans < numberToGuess){
        alert(ans + ' is too low. You have ' + guessesLeft + ' more chance(s)');
    } else if (ans > numberToGuess){
        alert(ans + ' is too high. You have ' + guessesLeft + ' more chance(s)');
    } else {
        alert('Something is wrong with the code. FIX ME!!! TAG 300');
    }
}

let found = false;
let attempts = 1;
// Having someone guess if an element in an array
while (attempts <= numberOfGuessesList && !found){
   
    let guessesLeft = numberOfGuessesList - attempts;    
    let ans = prompt('Guess one of my top 3 favorite discs:');

    for (let j = 0; j < acceptableDiscs.length; j++){
        if (ans.toLowerCase() === acceptableDiscs[j].toLowerCase()){
           found = true;
        }
    }

    if (found){
         alert('Congratulations!!! ' + ans + ' was one of the discs and it took you ' + attempts + ' tries!');
         numberOfCorrect++;         
    } else {
        alert(ans + ' is not on the list of my top 3 favorite discs. Try again, you have ' + guessesLeft + ' more chance(s).');
    }

    attempts++;
}

// Storing the acceptable list of discs in one string with proper structure
let discListString = '';
let lastElement = acceptableDiscs.length - 1;
for (let i = 0; i < lastElement; i++){
    discListString += (acceptableDiscs[i] + ', ');
}
discListString += ('and ' + acceptableDiscs[lastElement]);

alert('My top 3 favorite discs are ' + discListString + '.');

alert(userName + ', you got ' + numberOfCorrect + ' answers correct!');

