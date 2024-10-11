const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
   let x = parseFloat(x_.value);

   let w = Math.sqrt(Math.abs(x) * Math.atan(x) * ((x / (1 + x ** 2)) - 2));

   wynik.innerHTML = `Wartość wyrażenia dla x = ${x}: ${w} ~= ${w.toFixed(2)}`;
});