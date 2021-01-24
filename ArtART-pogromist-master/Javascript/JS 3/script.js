// Создать переменную step с начальным значением 10
let  step = 10;

/*function turnpx(a) {
    a.replace("px", "");
    a = parseInt(a) + step;
    a = a + "px";
    return a;
} */

function setCSS (element, rule, value) {
    let css = window.getComputedStyle(element)[rule].replace("px", "");

    element.style[rule] = (parseInt(css) + value) + "px";
    
}

function finish() {
    let h1 = p1.style.height.replace("px", "");
    let h2 = p2.style.height.replace("px", "")
    let hr = window.getComputedStyle(fin)["margin-top"].replace("px", "");
    let finishLine = window.innerHeight - hr;
    console.log(h1);
    console.log(h2);
    console.log(hr);
    console.log(finishLine);

    if (parseInt(h1) >= finishLine) {
        alert("Player 1 has won the game!");
        document.removeEventListener("keyup", game);
    } else if (parseInt(h2) >= finishLine) {
        alert("Player 2 has won the game!");
        document.removeEventListener("keyup", game);
    }
}


// Создать event-функцию c названием game
function game(event){
    
    if (event.keyCode == 32) {

        

        let first = p1.style.height;
        let now = first.replace("px", "");
        now = parseInt(now) + step;
        p1.style.height = now + "px";

        
        

    } else if (event.keyCode == 38) {

        
        setCSS(p2, "height", step);

    } else {

        //alert("Wrong key!");

    }

        finish();
    // Вывести в консоль элемент вызываший событие 

    // Код клавиши Пробел(32) и Стрелочка_Вверх(38)

    //ДЗ на 16.08.2020 
    //1)При нажатии на клавишу первого игрока в консоль выводить "Нажал игрок 1"
    // Иначе При нажатии на клавишу второго игрока в консоль выводить "Нажал игрок 2"
    // Иначе выводить уведомительно окно с сообщением, о том что игроки неправильно нажали на клавиатуру
    //2)Создать коммит с сообщением "Игра. Нажатие клавиши" и запушить


}

// Добавить обработчик события на весь документ во время нажатия клавиши
document.addEventListener("keyup", game) 


