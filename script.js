let button = document.getElementById("btn");
let err = document.querySelector(".error-msg");
let inputField = document.getElementById("name"); 

function validate() {
    let x = inputField.value; 
    if (x === "") {
        err.classList.add("Error-Msg"); 
    }
}

inputField.addEventListener("focus", function () {
    err.classList.remove("Error-Msg"); 
});
