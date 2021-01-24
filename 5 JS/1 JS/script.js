
function onSubmit(event){
    event.preventDefault();
let form = event.target

let name = form.userName.value;
    let age = form.userAge.value;
    let from =form.userFrom.value;
    let like =form.userLike.value;


  

    

    


    console.log(like);




    story.innerHTML = "Сидел  и играл в " + name + ".Сидит в "
 let sA = "Сидел  и играл в" + name + ".Сидит в "
let sB = age
let sC = From
let sD = like

userLikes


 story.innerHTML = sA + sB + sC + sD;
    
}



popitka.addEventListener("submit", onSubmit);