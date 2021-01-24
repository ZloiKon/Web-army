function onSubmit(event){
    story.innerHTML = event.target.id;
    event.preventDefault();
    let form = event.target;
    let name = form.userName.value;
    let age  = form.userAge.value;
    let from = form.userFrom.value;

    let sA = name
    let sB = age
    let sC = from
    let userLike = document.getElementsByClassName("userLike")
    let like = [];
    let sD = "А ещё он любит:"
    for(let i = 0; i < like.length; i++){
        sD += like[i] + ","
        if(i != like.length-1){
            sD +=","
        }
else{
    sD += ","
    }
}




    for(let i = 0; i<userLike.length; i++){
        if(userLike[i].checked == true){
            like.push(userLike[i].value)
        }
     
    }
    console.log(like)
    story.innerHTML = "Жил-был, не тужил, семки грыз и много ел " + name + ". Однажды произошло нечто страшное, на столько страшное что у " + name + " выключился компьютер. Тогда он отнес его в ремонт. Это был его первый ремонт за " + age + " лет из группы " + from + ". Это не единственное его развлечение. Ещё он любит " + like + ". На этом всё!!!";
}   
popitka.addEventListener("submit", onSubmit);

