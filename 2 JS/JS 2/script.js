

function grow(element){
    let step = 10;
    let h = parseInt( window.getComputedStyle(element)["height"].replace("px", "") );
    console.log(h+step)
    element.style.height = h + step + "px";
    if( h + step >= 900){
        alert("Игра окончена")
    }
    else{
        console.log("Игра продолжается")
    }


}

function game(event){
    console.log(event.keyCode);
    if(event.keyCode == 32){
        grow(p1)
    }
    else if(event.keyCode == 38){
        grow(p2)
    }
    else{
        console.log("Не правильно нажата клавиша!!!!!")
    }
  




}
document.addEventListener("keyup", game)

