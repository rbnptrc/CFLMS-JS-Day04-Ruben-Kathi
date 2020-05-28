let color = ["#ffb142", "#ff793f", "#227093", "#b33939"];
let i = 0;
document.querySelector("button").addEventListener("click", function() {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]
});

let button = document.getElementById("change");

let text = document.getElementById("text");


change.addEventListener("mouseover", function() {
    text.innerHTML = "you are in circle";
});


change.addEventListener("mouseout", function() {
    text.innerHTML = "you are out of circle";
});