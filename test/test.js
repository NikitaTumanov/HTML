function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
var name = window.prompt('Введите свое имя и давайте начнем!!');
window.confirm ('Ну что, ' + name + ' ты готов??' )
ready(choices);

var content =
    [
        {question: 'Из какого города футбольный клуб "Аякс"?', choices: ["Гаага", "Ротердам", "Эйндховен", "Амстердам"], correct: 3,picture:'img/ajax.jpg'},
        {question: 'В каком городе не проходил чемпионат мира по футболу 2018?', choices: ['Волгоград', 'Краснодар', 'Нижний Новгород', 'Саранск'], correct: 1 ,picture:'img/krasnodar.jpg'},
        {question: 'Как называется домашний стадион Реал Мадрида?', choices: ['Камп Ноу', 'Вандо Метраполитано', 'Сантьяго Бернабеу', 'Месталья'], correct: 2,picture:'img/rm.jpg'},
        {question: 'Как зовут этого футболиста?', choices: ['Канте', 'Мбаппе', 'Гризманн', 'Погба'], correct: 3,picture:'img/pogba.jpg'},
        {question: 'Which of these clubs have never won the Champions League?', choices: ['Steaua Bucuresti', 'Red Star Belgrade','Reims', 'Marseille', 'PSV'], correct: 0,picture:'img/davies.jpg'},
        {question: 'Which of these clubs drew all Champions league group games in 2002/03?', choices: ['Liverpool', 'Rubin Kazan', 'Spartak Moscow', 'Dynamo Kyiv', 'AEK Athens'], correct: 2,picture:'img/bissaka.jpg'}

    ];
var x = 0;
var y = 1;
var score = 0;
function colorit(){
    if(content[x]['correct']==0){
        document.getElementById("button1").style.backgroundColor = "green";
        document.getElementById("button2").style.backgroundColor = "red";
        document.getElementById("button3").style.backgroundColor = "red";
        document.getElementById("button4").style.backgroundColor = "red";
    }
    if(content[x]['correct']==1){
        document.getElementById("button1").style.backgroundColor = "red";
        document.getElementById("button2").style.backgroundColor = "green";
        document.getElementById("button3").style.backgroundColor = "red";
        document.getElementById("button4").style.backgroundColor = "red";
    }
    if(content[x]['correct']==2){
        document.getElementById("button1").style.backgroundColor = "red";
        document.getElementById("button2").style.backgroundColor = "red";
        document.getElementById("button3").style.backgroundColor = "green";
        document.getElementById("button4").style.backgroundColor = "red";
    }
    if(content[x]['correct']==3){
        document.getElementById("button1").style.backgroundColor = "red";
        document.getElementById("button2").style.backgroundColor = "red";
        document.getElementById("button3").style.backgroundColor = "red";
        document.getElementById("button4").style.backgroundColor = "green";
    }
    document.getElementById("next").style.backgroundColor="#4CAF50";
    document.getElementById("next").disabled = false;
}
function myFunction1() {
    if(content[x]['correct']==0){
        score++;
    }
    colorit();
}
function myFunction2() {
    if(content[x]['correct']==1){
        score++;
    }
    colorit();
}
function myFunction3() {
    if(content[x]['correct']==2){
        score++;
    }
    colorit();

}
function myFunction4() {
    if(content[x]['correct']==3){
        score++;
    }
    colorit();
}
function choices() {
    if (content[x] === undefined) {
        document.getElementById("button1").style.visibility = "hidden";
        document.getElementById("button2").style.visibility = "hidden";
        document.getElementById("button3").style.visibility = "hidden";
        document.getElementById("button4").style.visibility = "hidden";
        document.getElementById("next").style.visibility = "hidden";
        document.querySelector('.header').style.visibility = 'hidden';
        document.getElementById("pict").style.visibility='hidden';
        document.querySelector('#content3').style.height="20%";
        document.querySelector('#content3').style.top="40%";
        if(score >= 4){
            document.querySelector('.score').textContent =name+', а ты хорош! У тебя ' + score + ' из 6';
        }
        if (score < 4){
            document.querySelector('.score').textContent = name+', тебе есть куда расти, у тебя ' + score + ' из 6';
        }
        if (score = 0){
            document.querySelector('.score').textContent = name+', ничего сегодня просто не твой день, у тебя ' + score;
        }

    } else {
        var questionNumber = document.querySelector('.questionNumber');
        questionNumber.textContent = 'Вопрос#' + y;

        var question = document.querySelector('.question');
        question.textContent = content[x]['question'];
        document.getElementById("pict").src= content[x]['picture'];
        document.getElementById("button1").style.backgroundColor = "white";
        document.getElementById("button2").style.backgroundColor = "white";
        document.getElementById("button3").style.backgroundColor = "white";
        document.getElementById("button4").style.backgroundColor = "white";
        document.getElementById("next").style.backgroundColor="red";
        document.getElementById("next").disabled = true;
        document.getElementById("button1").innerText=content[x]['choices'][0];
        document.getElementById("button2").innerText=content[x]['choices'][1];
        document.getElementById("button3").innerText=content[x]['choices'][2];
        document.getElementById("button4").innerText=content[x]['choices'][3];
    }
}

function next() {
    var inputs = document.querySelectorAll('input');
    x++;
    y++;
    choices();
}
