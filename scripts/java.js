'use strict';

// Purpose: To check if user input is one of the valid input values
// Input: String
// Output: Returns boolean value if input string is y/n/yes/no

function inputChecker(stringToCheck){
    stringToCheck = stringToCheck.toLowerCase();

    return (stringToCheck === 'y' || stringToCheck === 'n' || stringToCheck === 'yes' || stringToCheck === 'no');
}

// Purpose: To check if user input matches the correct answer
// Input: User provided answer as a string and the array of possibile correct answers
// Output: Provides user feedback and returns 1 on correct response, otherwise returns 0

function userFeedback(userResponse, correctAnswer){
    userResponse = userResponse.toLowerCase();

    if (userResponse === correctAnswer[0] || userResponse === correctAnswer[1]){
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

// Debug alert to check if there are the name number of questions as answers
if (questions.length != answers.length){
    alert('FATAL ERROR - Number of questions does not match number of provided answers');
}

let userName = prompt('Hello! What is you name?');

// Main loop to cycle through the questions
for (let i = 0; i < questions.length;  i++){
    let ans = prompt(questions[i]);
    while (!inputChecker(ans)){
        alert('Please provide a valid input y/n/yes/no');
        ans = prompt(questions[i]);
    }

    numberOfCorrect += userFeedback(ans, answers[i]);
}

alert(userName + ', you got ' + numberOfCorrect + ' answers correct!');
