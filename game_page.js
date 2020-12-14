player1_name = localStorage.getItem("Player 1")
player2_name = localStorage.getItem("Player 2")
player1_score = 0
player2_score = 0

document.getElementById("player1_name").innerHTML = player1_name + ": "
document.getElementById("player2_name").innerHTML = player2_name + ": "
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score 

document.getElementById("player_question").innerHTML = "It is " + player1_name + "'s turn to write the question."
document.getElementById("player_answer").innerHTML = "It is " + player2_name + "'s turn to tell the answer."

function displayQuestion(){
inputBoxValue = document.getElementById("inputWord").value
word = inputBoxValue.toLowerCase();
console.log("Word in lower case = " + word)
charAt1 = word.charAt(1)
console.log(charAt1)
lengthDivideBy2 = Math.floor(word.length/2)
console.log(lengthDivideBy2)
charAt2 = word.charAt(lengthDivideBy2)
console.log(charAt2)
getLastNumber = word.length-1 
charAt3 = word.charAt(getLastNumber)
console.log(charAt3)
var remove_charAt1 = word.replace(charAt1, "_");
console.log(remove_charAt1)
var remove_charAt2 = remove_charAt1.replace(charAt2, "_")
console.log(remove_charAt2)
var remove_charAt3 = remove_charAt2.replace(charAt3, "_")
console.log(remove_charAt3)

question_word = "<h4 id = 'word_display'>Q. " + remove_charAt3 + "</h4>"
input_box = "<br>Answer: <input id = 'input_check_box' type = 'text'>"
check_button = "<br><br> <button id = 'check_button' class = 'btn btn-success' onclick = 'checkFunction()'>Check your answer!</button> "
row = question_word + input_box + check_button
document.getElementById("output").innerHTML = row;
document.getElementById("inputWord").value = ""
}
var question_turn = "Player 1"
var answer_turn = "Player 2"

function checkFunction(){
var answer_value = document.getElementById("input_check_box").value
var answerInLowercase = answer_value.toLowerCase()
console.log("Answer normal = " + answer_value + " | In Lower case = " + answerInLowercase)
if (answerInLowercase == word){
    if(answer_turn == "Player 1"){
        player1_score = player1_score + 1
        document.getElementById("player1_score").innerHTML = player1_score
        
    }
    else{
        player2_score = player2_score + 1
        document.getElementById("player2_score").innerHTML = player2_score
    }
        
}
if(question_turn == "Player 1"){
    question_turn = "Player 2"
 document.getElementById("player_question").innerHTML = "It is " + player2_name + "'s turn to write the question."
}
else{
    question_turn = "Player 1"
    document.getElementById("player_question").innerHTML = "It is " + player1_name + "'s turn to write the question."
}
if(answer_turn == "Player 1"){
    answer_turn = "Player 2"
    document.getElementById("player_answer").innerHTML = "It is " + player2_name + "'s turn to write the answer."
}
else{
    answer_turn = "Player 1"
    document.getElementById("player_answer").innerHTML = "It is " + player1_name + "'s turn to write the answer."
}
document.getElementById("output").innerHTML = ""
}
