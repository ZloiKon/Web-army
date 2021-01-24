console.log($(".segment").css("background-color"));
$(".segment:nth-child(9)").css({
    "background-color": "red",
});
$(".segment:nth-child(1)").css({
    "background-color": "black",
});
$(".segment:nth-child(3)").css({
    "background-color": "black",
});
$(".segment:nth-child(7)").css({
    "background-color": "black",
});
$(".segment:nth-child(11)").css({
    "background-color": "black",
});
$(".segment:nth-child(5)").css({
    "background-color": "red",
});
$(".segment:nth-child(2n)").css({
    "background-color": "yellow", 
});
$(".segment:nth-child(2n)").click(function(event){ 
    $(event.target).toggleClass("clicked"); 
});