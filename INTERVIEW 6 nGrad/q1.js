// Create a username input and a password input and  a submit button. if the password includes the username, then display weak password in red and disable the submit button. else, enable the button. Can you do a case-insensitive comparison for the same ?


const userName = document.querySelector("#username")
const password = document.querySelector("#password")
const checkBtn = document.querySelector("#checkbtn")
const output = document.querySelector("#output")

checkBtn.disabled = false

checkBtn.addEventListener("click", checkPassword)

password.addEventListener("input", () => {
    checkPassword();
//checkBtn.disabled = true
})
function checkPassword() {
    let name = userName.value.toLowerCase()
    let passwordtxt = password.value.toLowerCase()
    if (passwordtxt.includes(name)) {
        output.innerHTML = "weak password"
        output.style.color = "red"
        checkBtn.disabled = true
    } else {
        output.innerHTML = "right password"
        output.style.color = "green"
        checkBtn.disabled = false
    }
}