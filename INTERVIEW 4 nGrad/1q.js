const inputTxt = document.querySelector("#inputtxt")
const output = document.querySelector("#output")
const clickBtn = document.querySelector("#clickbtn")

let nameData = [{
    name: "tanvi",
    show: "she is the best CEO"
},
{
    name: "tanay",
    show: "he is our FUNNY mentor"
},
{
    name: "Swapnil",
    show: "He helps us CONQUER jobs "
},
{
    name: "Akanksha",
    show : "She is our CHEERFUL interviewer"
}
]

console.log(nameData);

clickBtn.addEventListener("click",showMsg )

function showMsg() {
    let msg =""
    for(let i=0;i< nameData.length ;i++  ){
        if( nameData[i].name === inputTxt.value ){
            msg = nameData[i].show;
          return   output.innerHTML = msg;            
        }else {
            output.innerHTML = "use correct name"
        }
    }
}








