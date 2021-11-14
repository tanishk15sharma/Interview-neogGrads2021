const checkBtn = document.querySelector("#checkbtn")
const output = document.querySelector("#output")


let url = "https://mystery-api.kushanksriraj.repl.co/get"

checkBtn.addEventListener("click" ,checkFetch )



function checkFetch() {
    fetch(url)
    .then(data=> {
        if(data.status === 404 ){
            output.innerHTML = "Page not found"
        }else if (data.status === 401 ){
            output.innerHTML = "you are not logged in "
        } else  {
            output.innerHTML = "API is working "
        }
    } )
}