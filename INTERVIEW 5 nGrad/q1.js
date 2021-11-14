const otpBtn = document.querySelector("#otpbtn")
const textInput = document.querySelector("#name")
const output = document.querySelector("#output")
const writeOtp = document.querySelector("#sendotp")
const checkBtn = document.querySelector("#checkotp")
const result = document.querySelector("#result")

console.log(textInput);
let url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name="

otpBtn.addEventListener("click", sendOtp)
checkBtn.addEventListener("click",checkOtp  )

//let name = textInput.value;


function sendOtp() {
    let name = textInput.value;

    fetch(url + name)
        .then(data => data.json()  )
        .then(show => output.innerHTML = show.otp.split("-")[1]  )
}

function checkOtp() {
    if(writeOtp.value === output.innerHTML ){
       // console.log("true");
       result.innerHTML = "correct"
    }
    else{
      //  console.log("false");
      result.innerHTML = "wrong"

    }

} 