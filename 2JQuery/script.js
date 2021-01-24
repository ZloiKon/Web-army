

let rubashka = "img/01.png";

let size = $("#size").attr("value");

function generateField(size) {


  let rdf = size * 150 + 16
  let field = (window.innerWidth - rdf) / 2;
  let cards = new Array(size * size);
  cards.fill({
    "src": rubashka,
    "width": "150",
    "class": "card",
    "id": "rub",
  });

  $("#field").css({
    "margin": field,
    "width": rdf
  });
  $('#field').html('');
  for (let i in cards) {
    $("#field").prepend($('<img>').attr(cards[i]));
  }




}

$("#btn").click(function (event) {
  size = $("#size").val();
  alert(size);

  if (size % 2 == 0) {
    generateField(size);
  } else {
    alert("Число не может быть нечётным!!!");
  }
});