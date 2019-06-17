var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timer = 60;
window.onload = function(){ 
    

document.getElementById("startButton").onclick = function() {
    firstQuestion();
    setInterval(firstQuestion,1000)
    optionsQ1();
}
}

function firstQuestion (){
    timer--;
    document.getElementById("timer1").innerHTML = "The time left is:" + timer;
    document.getElementById("questionUno").innerHTML = "When was the first Zelda Game released?";
    document.getElementById("startButton").style.display = "none";
}

function optionsQ1 (){
    var button1 = document.createElement("button");
    button1.innerHTML = "1986"
    document.body.appendChild(button1);

    var button2 = document.createElement("button");
    button2.innerHTML = "1990"
    document.body.appendChild(button2);

    var button3 = document.createElement("button");
    button3.innerHTML = "1989"
    document.body.appendChild(button3);
}


