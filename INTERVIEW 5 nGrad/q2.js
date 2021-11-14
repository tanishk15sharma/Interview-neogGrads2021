const currentInput = document.querySelector("#current")
const initialInput = document.querySelector("#cost")
const checkBtn = document.querySelector("#check")
const output = document.querySelector("#output")

checkBtn.addEventListener("click",checkProfitLoss  )


function checkProfitLoss() {
    if(  Number(currentInput.value) > Number(initialInput.value) ){
        console.log("profit");
    }else {
        console.log("loss");
    }
}