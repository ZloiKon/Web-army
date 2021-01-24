function setResult(event){
    result.innerHTML=event.target.value
}
btn.addEventListener("click", setResult)
btn1.addEventListener("click", setResult)
btn2.addEventListener("click", setResult)
btn3.addEventListener("click", setResult)

function setResultTXT(event){
    resultB.innerHTML=txtB.value
}    
btnB.addEventListener("click", setResultTXT)
function setResultTX(event){
    resultC.innerHTML=txtD.value
}    
btnC.addEventListener("click", setResultT)
function setResultT(event){
    resultD.innerHTML=txtC.value
}    
btnD.addEventListener("click", setResultTX)