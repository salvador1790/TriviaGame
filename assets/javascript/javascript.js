var timer = 50;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var timerStart;

$(document).ready(function() {
    $("#laMusic").get(0).play();
});

function startGame() {
    $("#startButton").css("display", "none");
    timerStart = setInterval(function () {
        timer--;
        $("#timer1").html(timer)
        if (timer === 0) {
            clearInterval(timerStart);
            $("p").html("Out of time! The right answer was 1986!");
            $("#1990").css("display", "none");
            $("#1970").css("display", "none");
            $("#1986").css("display", "none");
            $("#1981").css("display", "none");
            var img = $('<img id="wrongGiphy">');
            img.attr('src', 'https://media.giphy.com/media/1443lILX9OKLHa/giphy.gif');
            img.appendTo('.container');
            unanswered++;
        }
    }, 1000)
    $("#timeRemain").text("The time remaining is: ");

    $("#question1Text").text("When was the first Legend of Zelda game released?")

    $("#1990").text("1990")
    $("#1970").text("1970")
    $("#1986").text("1986")
    $("#1981").text("1981")


}

function correctAns1() {
    clearInterval(timerStart);
    $("p").html("Correct! It was 1986");
    $("#1990").css("display", "none");
    $("#1970").css("display", "none");
    $("#1986").css("display", "none");
    $("#1981").css("display", "none");
    var img2 = $('<img id="wrongGiphy">');
    img2.attr('src', 'https://media.giphy.com/media/623GsYzT908Z63VOs1/giphy.gif');
    img2.appendTo('.container');
    correctAnswers++;
    setTimeout(question2, 3000);
}

function wrongAns1() {
    clearInterval(timerStart);
    $("p").html("Wrong! The right answer was 1986!");
    $("#1990").css("display", "none");
    $("#1970").css("display", "none");
    $("#1986").css("display", "none");
    $("#1981").css("display", "none");
    var img = $('<img id="wrongGiphy">');
    img.attr('src', 'https://media.giphy.com/media/xUnHgQ9lKGl68/giphy.gif');
    img.appendTo('.container');
    wrongAnswers++;
    setTimeout(question2, 3000);
}

function question2(){
    $("#timer1").html(timer2)
    $("#timeRemain").html("The time remaining is: ");
    $("#question1Text").html("What is the name of the main hero in The Legend of Zelda?")
    $("#wrongGiphy").css("display", "none");
    $("#Sheik").html("Sheik");
    $("#Zelda").html("Zelda");
    $("#Link").html("Link");
    $("#Goron").html("Goron");
}

function correctAns2(){
    $("p").html("Correct! His name is Link!")
    $("#Sheik").css("display", "none");
    $("#Zelda").css("display", "none");
    $("#Link").css("display", "none");
    $("#Goron").css("display", "none");
    var img = $('<img id="wrongGiphy2">');
    img.attr('src', 'https://media.giphy.com/media/2UHbv8WT6TKBeeP9Mt/giphy.gif');
    img.appendTo('.container');
    correctAnswers++;
    setTimeout(question3, 3000);
}

function wrongAns2(){
    $("p").html("Wrong! His name is Link!");
    $("#Sheik").css("display", "none");
    $("#Zelda").css("display", "none");
    $("#Link").css("display", "none");
    $("#Goron").css("display", "none");
    var img = $('<img id="wrongGiphy2">');
    img.attr('src', 'https://media.giphy.com/media/3NpzwnO0KfSIo/giphy.gif');
    img.appendTo('.container');
    setTimeout(question3, 3000);
    wrongAnswers++;
}

function question3(){
    $("#timer1").html(timer2)
    $("#timeRemain").html("The time remaining is: ");
    $("#question1Text").html("Which piece of the triforce does Link possess?")
    $("#wrongGiphy2").css("display", "none");
    $("#Power").html("Power");
    $("#Courage").html("Courage");
    $("#Wisdom").html("Wisdom");
    $("#Magic").html("Magic");
}

function correctAns3(){
    $("p").html("Correct! He holds the triforce of Courage!")
    $("#Power").css("display", "none");
    $("#Courage").css("display", "none");
    $("#Wisdom").css("display", "none");
    $("#Magic").css("display", "none");
    var img = $('<img id="wrongGiphy3">');
    img.attr('src', 'https://media.giphy.com/media/ell4b8q8RSSkM/giphy.gif');
    img.appendTo('.container');
    correctAnswers++;
    setTimeout(question4, 3000);
}

function wrongAns3(){
    $("p").html("Wrong! He holds the trifoce of Courage!");
    $("#Power").css("display", "none");
    $("#Courage").css("display", "none");
    $("#Wisdom").css("display", "none");
    $("#Magic").css("display", "none");
    var img = $('<img id="wrongGiphy3">');
    img.attr('src', 'https://media.giphy.com/media/1hzYVoCEc3QvHz48e6/giphy.gif');
    img.appendTo('.container');
    wrongAnswers++
    setTimeout(question4, 3000);
}

function question4(){
    $("#timer1").html(timer2);
    $("#timeRemain").html("The time remaining is: ");
    $("#question1Text").html("What is the latest title for Legend of Zelda games?");
    $("#wrongGiphy3").css("display", "none");
    $("#OcarinaofTime").html("Ocarina of Time");
    $("#SkywardSword").html("Skyward Sword");
    $("#WindWaker").html("Wind Waker");
    $("#BreathoftheWild").html("Breath of the Wild");
}

function correctAns4(){
    $("p").html("Correct! It is Breath of the Wild!");
    $("#OcarinaofTime").css("display", "none");
    $("#SkywardSword").css("display", "none");
    $("#WindWaker").css("display", "none");
    $("#BreathoftheWild").css("display", "none");
    var img = $('<img id="wrongGiphy4">');
    img.attr('src', 'https://media.giphy.com/media/HXxyRaZtpslP2/giphy.gif');
    img.appendTo('.container');
    correctAnswers++;
    setTimeout(results, 3000);
}

function wrongAns4(){
    $("p").html("Wrong! It is Breath of the Wild!");
    $("#OcarinaofTime").css("display", "none");
    $("#SkywardSword").css("display", "none");
    $("#WindWaker").css("display", "none");
    $("#BreathoftheWild").css("display", "none");
    var img = $('<img id="wrongGiphy4">');
    img.attr('src', 'https://media.giphy.com/media/U8o1ssggvfKAo/giphy.gif');
    img.appendTo('.container');
    wrongAnswers++;
    setTimeout(results, 3000);
}

function results(){
    $("#timer1").css("display", "none");
    $("p").html("");
    $("#correct").html("Your correct score is " + correctAnswers);
    $("#incorrect").html("Your incorrect score is " + wrongAnswers);
    $("#wrongGiphy4").css("display", "none");
}