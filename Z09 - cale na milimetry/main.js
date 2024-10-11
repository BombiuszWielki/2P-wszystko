const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let x = parseFloat(x_.value);
   const inch = 25.3995;

    wynik.innerHTML = `${x}in = ${x * inch}mm ~= ${(x * inch).toFixed(2)}mm`;
});