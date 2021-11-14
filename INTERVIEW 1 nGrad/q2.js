const textArea = document.querySelector("#textarea")
const clickBtn = document.querySelector("#clickbtn")
const output = document.querySelector("#output")

clickBtn.disabled = true

textArea.addEventListener("input",() =>{
clickBtn.disabled = false
}  ) 
clickBtn.addEventListener("click",() =>{
    output.innerText = textArea.value.length
}  )