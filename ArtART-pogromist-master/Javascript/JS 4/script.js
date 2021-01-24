let div = document.createElement("div");
let c1 = document.createElement("div");

h.innerHTML = "Test";

c1.style.height = "100px";
c1.style.width = "100px";
c1.style.backgroundColor = "blue";
c1.style.display = "block";
c1.style.borderRadius = "50%";

div.innerHTML = "I was made by JS";

div.style.height = "50px";
div.style.width = "150px";

div.style.backgroundColor = "blue";

document.body.appendChild(c1);

console.log(div);

document.body.appendChild(div);