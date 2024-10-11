const s_ = document.querySelector("#s");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let s = parseInt(s_.value);

   let g = Math.floor(s/3600);
   let gr = s % 3600;
   let m = Math.floor(gr/60);
   let mr = gr % 60;

   wynik.innerHTML = `${s}s = ${g}g ${m}m ${mr}s`;
});