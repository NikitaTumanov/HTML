function open(val){
    alert("sttop");
    let img = ['Freego%20F6.PNG'];
    let name = ["<h1>Freego F6 250w</h1><span>\n" +
    "                Дальность 20-25 км / 36v, 6.6 ah / 237.6wh<br>\n" +
    "                Скорость: 25 км/ч / заднее мотор-колесо 350w<br>\n" +
    "                Колёса 6.5 дюймов / E-ABS + ножной<br>\n" +
    "                Вес: 11 кг / Задняя подвеска / нагрузка 100 кг<br>\n" +
    "                Крылья, подножка, LCD экран, LED фара<br></span>"];

    document.getElementById('image').innerHTML=img[val];
    document.getElementById('samokat').src=name[val];
    document.querySelector(".information-book").style.visibility="visible";
}