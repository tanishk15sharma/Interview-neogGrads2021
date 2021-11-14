const text = document.querySelector("#text")
//const boldBtn = document.querySelector("#1btn")
//const lightBtn = document.querySelector("#10pxbtn")
const button1 = document.querySelector("#btn1")
const button2 = document.querySelector("#btn2")



button1.addEventListener("click",() =>{
    text.style.border = "5px solid"
} )
button2.addEventListener("click",() => {
    text.style.border = "10px solid"

} )