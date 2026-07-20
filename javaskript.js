const yearInput = document.getElementById('yearInput');
const checkYearButton = document.getElementById('checkYearButton');
checkYearButton.addEventListener("click",click)
function click(){
   // За григоріанським календарем високосним вважається рік, який без залишку ділиться на 4. Виняток становлять роки, які діляться на 100 (вони невисокосні), проте якщо вони діляться на 400, то все одно вважаються високосними.
const year = yearInput.value 
// if(year%100===0 && year%400!==0 ){
//     alert("Ви народилися у невисокосний рік!")
// }
// if(year%4===0){
//     alert("Ви народилися у високосний рік!")
// }
if(year%400===0){
    alert("Ви народилися у високосний рік!")
}else if(year%100===0){
    alert("Ви народилися у невисокосний рік!")
}
else if(year%4===0){
    alert("Ви народилися у високосний рік!")
}
else{
alert("Ви народилися у невисокосний рік!")
}
}
const yearResult = document.getElementById("yearResult");

// задание 2
const randomizer = Math.floor(Math.random()*10) + 1
const answerinput = document.getElementById("answerinput")
const answerbutton = document.getElementById("answerbutton")
const answerp = document.getElementById("answerp")
answerbutton.addEventListener("click",answerclick)
function answerclick(){
    console.log(randomizer)
    const answer=answerinput.value
    if(+answer===randomizer){
        answerp.innerHTML=`Вітаю, ви вгадали число! ${answer}`
    }
    else if(+answer>randomizer){
        answerp.innerHTML=`Ви ввели занадто велике число! Спробуйте ще раз.`
    }
    else{
        answerp.innerHTML=`Ви ввели занадто маленьке число! Спробуйте ще раз.`
    }
}

