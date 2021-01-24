

console.log($(".circle").css("background-color"))

$(".circle").css("background-color")
document.getElementsByClassName("circle")[0].style.backgroundColor;

// JQUERY .css() - set

$(".circle:nth-child(5)").css({
    "background": "red"
})

$(".circle:nth-child(2n)").css({
    "background": "orange"
});

$(".circle:nth-child(2n+1)").css({
    "background": "brown"
});

$(".circle:first-child").css({
    "background": "black",
    "border-radius": "25%"
});

$(".circle:last-child").css({
    "background": "black",
    "border-radius": "25%"
});

$(".circle:nth-child(2n)").click(function (event) { 
    
    $(event.target).toggleClass("clicked");
    
});

