let btn = document.getElementById("btn");
let Light = document.getElementById("Light")
btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    Light.classList.toggle("on")
});
