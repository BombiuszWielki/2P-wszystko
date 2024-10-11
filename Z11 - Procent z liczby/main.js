const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let a = parseInt(a_.value);
   let b = parseInt(b_.value);

   let w = a * (b / 100);

   wynik.innerHTML = `${b}% z liczby ${a} to: ${w}`;
});