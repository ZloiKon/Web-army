let colors = ["white", "black", "blue", "red", "yellow", "green"];

let textA = document.createElement("input");
textA.style.marginLeft = "10px";
document.body.appendChild(textA);
let div = document.createElement("div");
div.id = "pallete";
div.style.display = "flex";
document.body.appendChild(div);

for (let i = 0; i < colors.length; i++) {
    let div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.backgroundColor = colors[i];
    div.style.borderRadius = "100%"; 
    div.style.border = "1px solid black"; 
    div.id = colors[i];

    pallete.appendChild(div); 
    
}

pallete.style.marginLeft = window.innerWidth / 2 - colors.length * 50 / 2 + "px";



let canvas = document.createElement("canvas");
canvas.id = "field";
canvas.style.border = "2px solid black";
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight * 0.8;
canvas.style.marginLeft = window.innerWidth / 2 - canvas.width / 2 + "px";
canvas.style.marginTop = "50px";

document.body.appendChild(canvas);
document.body.appendChild(textA);

let color = "black";

let brushSize = 2;
let prevX = prevY = 0;
let currX = currY = 0;
let isDraw = false;


for (let i = 0; i < colors.length; i++ ) {

    document.getElementById(colors[i]).addEventListener('click', function(event){
        for(let i = 0; i < colors.length; i++ ){
            document.getElementById(colors[i]).style.width = "50px";
            document.getElementById(colors[i]).style.height = "50px";
        }
        event.target.style.width = "75px";
        event.target.style.height = "75px";

        color = event.target.id;
        console.log(color);

    });


}

canvas.addEventListener('mouseup', function(event) {
    isDraw = false;
})
canvas.addEventListener('mouseout', function(event) {
    isDraw = false;
})
canvas.addEventListener('mousedown', function(event) {
    isDraw = true;

    if (textA.value != "") {
        brushSize = textA.value;
    }
    prevX = currX;
    prevY = currY;
    currX = event.offsetX;
    currY = event.offsetY;
})
canvas.addEventListener('mousemove', function(event) {
    if (isDraw == true) {

        prevX = currX;
        prevY = currY;
        currX = event.offsetX;
        currY = event.offsetY; 
        draw();
    }
})

function draw() {
    let context = canvas.getContext("2d");

    context.beginPath();

    context.moveTo(prevX, prevY);
    context.lineTo(currX, currY);
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    context.stroke();

    context.closePath();
}