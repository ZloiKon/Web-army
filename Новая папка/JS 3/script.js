function onSubmit(event){
    story.innerHTML = event.target.id;
    event.preventDefault();
    let form = event.target;
    let name = form.userName.value;
    let age  = form.userAge.value;
    let from = form.userFrom.value;
    let like = form.userLike.value;
    console.log("name: " + name)
    console.log("age: " + age)
    console.log("from: " + from)
    console.log("like: " + like)

    let sA = name
    let sB = age
    let sC = from


let userLike = document.getElementsByClassName.apply("UserLike")

    console.log(like);
    story.innerHTML = "Жил-был, не тужил, семки грыз и много ел " + name + ". Однажды произошло нечто страшное, на столько страшное что у " + name + " выключился компьютер. Тогда он отнес его в ремонт. Это был его первый ремонт за " + age + " лет из группы " + from + ". Мне страшно!!!";
}

popitka.addEventListener("submit", onSubmit);
for(let i = 0; i<userLike.length, i++){

}






for(let i = 0; i<userLike.length, i++){
let userLike = document.getElementsByClassName.apply("UserLike")