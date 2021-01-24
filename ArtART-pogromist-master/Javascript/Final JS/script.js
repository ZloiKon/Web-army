
function onSubmit(event) {

    // not allowing to reload page
    event.preventDefault();

    // creating variables for user input
    let form = event.target;
    let name = form.userName.value;
    let age = form.age.value;
    let origin = form.check.value;
    let like = [];
    let t;

    // getting elements from checkboxes
    let userLike = document.getElementsByClassName("userLike");
   
    // changing type of array 'userLike --> like'
    for (i = 0; i < userLike.length; i++) {
        if (userLike[i].checked == true) {
            like.push(userLike[i].value)
           
            
        }
       
    } 

    // deciding, which text suites the best
    switch (like.length) {
        case 0:
            t = "Once in a beautiful world " + name + " went to grandma to get some cash. Even if he was " + age + " years old and came from " + origin + ", it was worth it, because grandma had a lot of money.";
            break;
        case 1:
            t = "Once in a beautiful world " + name + " went to grandma to get some cash. Even if he was " + age + " years old and came from " + origin + ", it was worth it, because grandma had a lot of money. He also was afraid of getting some " + like[0] + ".";
            break;
        case 2:
            t = "Once in a beautiful world " + name + " went to grandma to get some cash. Even if he was " + age + " years old and came from " + origin + ", it was worth it, because grandma had a lot of money. He also was afraid of getting some " + like[0] + " and " + like[1] + ".";
          break;
        case 3:
            t = "Once in a beautiful world " + name + " went to grandma to get some cash. Even if he was " + age + " years old and came from " + origin + ", it was worth it, because grandma had a lot of money. He also was afraid of getting some " + like[0] + ", " + like[1] + " and " + like[2] + ".";
            break;
        case 4:
            t = "Once in a beautiful world " + name + " went to grandma to get some cash. Even if he was " + age + " years old and came from " + origin + ", it was worth it, because grandma had a lot of money. He also was afraid of getting some " + like[0] + ", " + like[1] + ", " + like[2] + " and " + like[3] + ".";
            break;
        case 5:
            t = "Once in a beautiful world " + name + " went to grandma to get some cash. Even if he was " + age + " years old and came from " + origin + ", it was worth it, because grandma had a lot of money. He also was afraid of getting some " + like[0] + ", " + like[1] + ", " + like[2] + ", " + like[3] + " and " + like[4] + ".";
            break;
        default:
            t = "error"
            break;
    }
    // putting the text in the message
    story.innerHTML = t;
}

// if form is sent, call function
popitka.addEventListener("submit", onSubmit);