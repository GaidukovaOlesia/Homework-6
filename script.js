let firstQuestion = prompt("How much will 2+2?");
let secondQuestion = prompt("What color is the sky?");
let thirdQuestion = prompt("The sun rises in the east?");
let fourthQuestion = prompt("Is the earth round?");
let fifthQuestion = prompt("What is the capital of Ukraine");
let points = 0;
let correct = 0;
if (+firstQuestion === 4) {
    points += 10;
    correct += 1;
}
if (secondQuestion.toLowerCase() === "blue") {
    points += 10;
    correct += 1;
}
if (thirdQuestion.toLowerCase() === "yes") {
    points += 10;
    correct += 1;
}
if (fourthQuestion.toLowerCase() === "yes") {
    points += 10;
    correct += 1;
}
if (fifthQuestion.trim() === "Kyiv") {
    points += 10;
    correct += 1;
}
alert(`Like! You have ${points} points. You answered correctly for ${correct}/5`);