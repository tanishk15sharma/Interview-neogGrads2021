const inputTxt = document.querySelector("#inputtxt")
const checkBtn = document.querySelector("#checkbtn")
const output = document.querySelector("#output")
checkBtn.disabled = true

checkBtn.addEventListener("click", checkpass)
inputTxt.addEventListener("input", () => {
let input = inputTxt.value;

    if (input.length > 10) {
        checkBtn.disabled = false
    } else {
        checkBtn.disabled = true
    }
})

function checkpass() {
      let input = inputTxt.value ;
    if (input.length > 10) {
        output.innerHTML = "succesfull"
    } else {
        output.innerHTML = "invalid"
    }
}