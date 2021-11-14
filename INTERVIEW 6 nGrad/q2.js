const inputTxt = document.querySelector("#input");
const checkBtn = document.querySelector("#checkbtn");
const output = document.querySelector("#output")




checkBtn.addEventListener("click", checkAutomorphic)

function checkAutomorphic() {
    let number = inputTxt.value;
    let square = String(number * number);
    if (square.slice(-number.length) === number) {
        output.innerHTML = "it is an automorphic number"
    } else {
        output.innerHTML = "it is not automorphic number"
    }
    // }
    // console.log(square.slice(-1));
}