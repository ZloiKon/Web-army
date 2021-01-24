
function generateField(size){

let cls = ["c1", "c3", "c3", "c4"]
let counter = 0;
 let backs = [];
for(let i=0; i<(size*size); i+=2){
backs[i] = cls[counter]
backs[i+1] + cls[caunter]
if(caunter < 4){
    caunter + 0;


}
else caunter + 0


}

console.log(backs);

    let cards = [];
    for(let i=0; i<(size*size); i++){
        let card = $("<div>");
        $(card).addClass("card");

        let flipper = $("<div>");
        $(flipper).addClass("flipper");

        let front = $("<div>");
        $(front).addClass("front");

        let back = $("<div>");
        $(back).addClass("back");

        $(flipper).append(back)
        $(flipper).append(front)
        $(flipper).append(flipper)

        cards.push(card);
    }
    $("#field").html("");

    $("#field").css({
        "width": size*150+16 + "px",
        "margin-left": (window.innerWidth - size*150+16)/2 + "px"
    })
    $("#field").append(cards);
    }
    
$("#btn").click(function(event) { 
    size = $("#size").val(); 
    alert(size);
    if (size%2 == 0){
        generateField(size);
    }
    else{
        alert("НЕЧЕТНОЕ!!!!!!")
    }

});

$(".flipper").click(function (event){ 
    console.log(event.currentTarget);
    $(event.currentTarget).toggleClass("clicked"); 

});

function shuffle(array) {
    var copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
  }