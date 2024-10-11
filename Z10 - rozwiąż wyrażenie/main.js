const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let x = parseFloat(x_.value);

    let a = (x ** 2) / ((1 + Math.abs(x)) ** 2);
    wynik.innerHTML = `Wartość wyrażenia dla x = ${x}:<br>${a} ~= ${a.toFixed(2)}`;
});