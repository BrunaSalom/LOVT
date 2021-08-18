// console.log ("Arquivo carregado")

let btnToggleTheme = document.querySelector(".toggleTheme");
// console.log(btnToggleTheme);
let body = document.querySelector("body")
let iframe = document.querySelector('iframe');

// let cafeDaManha = true
// if ternário:(condição) ? if true   : false
// console.log(cafeDaManha) ? "to tranquila" : "To de mau humor"


// arrow function: sintaxa sofisticada de função  -  btnToggleTheme.onclick = (event) => ;
btnToggleTheme.onclick = function(event) {
    body.classList.toggle("dark-theme");
    iframe.style.cssText = "filter: invert(90%)";
}