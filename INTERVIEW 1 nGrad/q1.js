const counterTxt = document.querySelector("#counter")
const increaseBtn = document.querySelector("#increasebtn")
const decreaseBtn = document.querySelector("#decreasebtn")



increaseBtn.addEventListener("click", increaseTxt)
decreaseBtn.addEventListener("click", decreaseTxt)


let sum = 0

function increaseTxt() {
    sum = sum + 1
    counterTxt.innerText = sum
    console.log(sum);
}
function decreaseTxt() {
    sum = sum - 1
    counterTxt.innerHTML = sum
}