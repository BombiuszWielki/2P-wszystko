const min_ = document.querySelector("#min");
const max_ = document.querySelector("#max");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let min = parseInt(min_.value);
   let max = parseInt(max_.value);

   let x1 = Math.round(Math.random() * (max - min) + min);
   let x2 = Math.round(Math.random() * (max - min) + min);
   let x3 = Math.round(Math.random() * (max - min) + min);
   let x4 = Math.round(Math.random() * (max - min) + min);
   let x5 = Math.round(Math.random() * (max - min) + min);

   let suma = x1 + x2 + x3 + x4 + x5;
   let iloczyn = x1 * x2 * x3 * x4 * x5;
   let srednia = suma / 5;

   wynik.innerHTML =
       `
       liczba 1: ${x1}<br>
       liczba 2: ${x2}<br>
       liczba 3: ${x3}<br>
       liczba 4: ${x4}<br>
       liczba 5: ${x5}<br>
       suma: ${suma}<br>
       iloczyn: ${iloczyn}<br>
       średnia: ${srednia}<br>
       `
});