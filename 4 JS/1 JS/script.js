
function onSubmit(event){
    event.preventDefault();
let form = event.target

let name = form.userName.value;
    let age = form.userAge.value;
    let from =form.userFrom.value;
    let like =form.userLike.value;


    console.log("name:" + name);
    console.log("age:" + age);
    console.log("from:" + from);
    console.log("like:" + like);


    console.log(like);




    story.innerHTML = "Жил был не тужил стенки грыз и много ел" + name + ".Однажды "
 let sA = "Жил был не тужил стенки грыз и много ел" + name + ".Однажды "
let sB = age
let sC = From
let sD = like
 story.innerHTML = sA + sB + sC + sD;
    
}



popitka.addEventListener("submit", onSubmit);