const a1_ = document.querySelector("#a1");
const b1_ = document.querySelector("#b1");
const c1_ = document.querySelector("#c1");
const a2_ = document.querySelector("#a2");
const b2_ = document.querySelector("#b2");
const c2_ = document.querySelector("#c2");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let a1 = parseFloat(a1_.value);
   let b1 = parseFloat(b1_.value);
   let c1 = parseFloat(c1_.value);
   let a2 = parseFloat(a2_.value);
   let b2 = parseFloat(b2_.value);
   let c2 = parseFloat(c2_.value);

   let y = (c2 * a1 - c1 * a2) / (b2 * a1 - a2 * b1);
   let x = (c1 - b1 * y) / a1;

   wynik.innerHTML =
       `
       x = ${x} ~= ${x.toFixed(2)}<br>
       y = ${y} ~= ${y.toFixed(2)}<br>
       `;
});