//
let img = $("<img>");
//
$(img).attr("src", "img/01.png");
//
$("body").append(img);

let rubashka = "omg/01.png"


function generateField(size){
    let cards = new Array(size*size)
    cards.fill(  $("<img>").attr({
        "src": rubashka,
        "width": "150",
        "class": "card",
        "id": "rub"
    }))

    
    console.log(cards);   
}






let size = $("#size").attr("value");
$("#btn").click(function(event){

    size = $("#size").val();
    if(size%2 == 0){
        generateField(size);
    }
else{
    alert("Не ЧЁТНОЕ")
}


});
    




