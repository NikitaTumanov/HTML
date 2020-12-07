function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(choices);

var content =
    [
        {question: 'Как ехать запрещено?', choices: ['По краю дороги', 'В трезвом состоянии', 'По велосипедной дорожке', 'По автомагистрали'], correct: 3,picture:'test/vpr1.jpg'},
        {question: 'Скорость строго ограничена до N километров в час и не более. Чему равно N?', choices: ['30', '60', '120', '90'], correct: 1 ,picture:'test/vpr2.jpg'},
        {question: 'Сколько человек может одновременно перемещаться на самокате?', choices: ['3', '4', '1', '2'], correct: 2,picture:'test/vpr3.jpg'},
        {question: 'Без какого элемента самоката движение невозможно?', choices: ['Звукового сигнала', 'Спортивной обуви', 'Шлема', 'Тормозной системы'], correct: 3,picture:'test/vpr4.jpg'},
        {question: 'А) Команда светофора для велосипедистов распространяется на СИМ тоже.\r\nБ) На жилой территории пешеход находится в приоритете.\r\nКакой из вариантов является верным?', choices: ['А', 'Б','А и Б', 'ни А, ни Б'], correct: 2,picture:'test/vpr5.jpg'},
        {question: 'Какой(ие) знаки относятся к СИМ?', choices: ['Движение на велосипедах запрещено', 'Обгон запрещается', 'Движение запрещено', 'Все выше перечисленные'], correct: 3,picture:'test/vpr6.jpg'}

    ];
var x = 0;
var y = 1;
var score = 0;
function colorit(){
    if(content[x]['correct']===0){
        document.getElementById("button1").style.backgroundColor = "green";
        document.getElementById("button2").style.backgroundColor = "Crimson";
        document.getElementById("button3").style.backgroundColor = "Crimson";
        document.getElementById("button4").style.backgroundColor = "Crimson";
    }
    if(content[x]['correct']===1){
        document.getElementById("button1").style.backgroundColor = "Crimson";
        document.getElementById("button2").style.backgroundColor = "green";
        document.getElementById("button3").style.backgroundColor = "Crimson";
        document.getElementById("button4").style.backgroundColor = "Crimson";
    }
    if(content[x]['correct']===2){
        document.getElementById("button1").style.backgroundColor = "Crimson";
        document.getElementById("button2").style.backgroundColor = "Crimson";
        document.getElementById("button3").style.backgroundColor = "green";
        document.getElementById("button4").style.backgroundColor = "Crimson";
    }
    if(content[x]['correct']===3){
        document.getElementById("button1").style.backgroundColor = "Crimson";
        document.getElementById("button2").style.backgroundColor = "Crimson";
        document.getElementById("button3").style.backgroundColor = "Crimson";
        document.getElementById("button4").style.backgroundColor = "green";
    }
    document.getElementById("next").style.backgroundColor="SteelBlue";
    document.getElementById("next").disabled = false;
}
function myFunction1() {
    if(content[x]['correct']===0 && document.getElementById("button1").style.backgroundColor ==="white"){
        score++;
    }
    colorit();
}
function myFunction2() {
    if(content[x]['correct']===1 && document.getElementById("button2").style.backgroundColor ==="white"){
        score++;
    }
    colorit();
}
function myFunction3() {
    if(content[x]['correct']===2 && document.getElementById("button3").style.backgroundColor ==="white"){
        score++;
    }
    colorit();

}
function myFunction4() {
    if(content[x]['correct']===3 && document.getElementById("button4").style.backgroundColor ==="white"){
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
        document.getElementById("knopka_1").style.display='block';
        document.querySelector('.score').textContent =name+'Ваш счет: ' + score + ' из 6';
    }
    else {
        var questionNumber = document.querySelector('.questionNumber');
        questionNumber.textContent = 'Вопрос#' + y;
        var question = document.querySelector('.question');
        question.textContent = content[x]['question'];
        document.getElementById("pict").src= content[x]['picture'];
        document.getElementById("button1").style.backgroundColor = "white";
        document.getElementById("button2").style.backgroundColor = "white";
        document.getElementById("button3").style.backgroundColor = "white";
        document.getElementById("button4").style.backgroundColor = "white";
        document.getElementById("next").style.backgroundColor="DarkRed";
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
