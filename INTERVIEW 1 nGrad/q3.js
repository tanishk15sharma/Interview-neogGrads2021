const clickBtn = document.querySelector("#clickbtn")
const output = document.querySelector("#output")


let url = "https://jsonplaceholder.typicode.com/todos"


clickBtn.addEventListener("click",fetchOutput  )



function fetchOutput()  {
    fetch(url)
    .then(data => data.json() )
    .then(show => {
        show.map(item => { if(item.completed  ) {
            output.innerHTML += `<p>${item.title}</p>` + "<br>" + `<p style="color:red"  >${item.completed}</p>`
            
            
        }else {
            output.innerHTML += `<p>${item.title}</p>` + "<br>" +`<p>${item.completed}</p>`
           // output.style.color = "red"

        }
           // output.innerHTML += `<p>${item.title}</p>` + "<br>" + `<p>${item.completed}</p>`
        })
    }  )
}
 
