let a = document.querySelector("h1");
a.innerHTML = "Changed html";
a.style.backgroundColor = "red";
a.addEventListener("click", function () {
    a.innerHTML = "Badal gaya hu mai teri ex ki tarah"
})
let flag = 0;
x = document.querySelector("#bulb")
x.addEventListener("click", function () {
    if (flag == 0) {
        x.style.backgroundColor = "yellow"
        flag = 1
    }
    else {
        x.style.backgroundColor = "white"
        flag = 0
    }
})
