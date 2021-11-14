const nameTxt = document.querySelector("#nametxt")
const passTxt = document.querySelector("#passtxt")
const checkBtn = document.querySelector("#check")
const output = document.querySelector("#output")


checkBtn.addEventListener("click", checkForName)


function checkForName() {
    let passData = passTxt.value

    var check = passData.includes(nameTxt.value)

    if (check) {
        output.innerHTML = "Password cant have name"

        // console.log("no name");
    } else {
        //console.log("its okay");
        output.innerHTML = "vaild "
    }
    console.log(check);
}