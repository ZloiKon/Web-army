btnA.addEventListener('click', getText);
btnB.addEventListener('click', getText);

function getText() {
    let textA = inTxtA.value;
    divB.innerHTML = textA;
    let textB = inTxtB.value;
    divA.innerHTML = textB;
}


