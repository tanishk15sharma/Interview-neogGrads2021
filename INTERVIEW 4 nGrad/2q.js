const yjhdBtn = document.querySelector("#btn1")
const znmdBtn = document.querySelector("#btn2")
const output = document.querySelector("#output")


const url = "https://mock-practice.prakhar10v.repl.co/bollywood?name="


//console.log(yjhdBtn.innerText);

yjhdBtn.addEventListener("click", () => {
    fetchMsg(yjhdBtn.innerText)
})
znmdBtn.addEventListener("click",() =>{
    fetchMsg(znmdBtn.innerText)
}  )

function fetchMsg(name) {
    fetch(url + name)
        .then(data => data.json())
        .then(msg => output.innerHTML = msg.message)
}
//fetchMsg()