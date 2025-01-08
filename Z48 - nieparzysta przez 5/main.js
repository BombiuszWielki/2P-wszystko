const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let x = parseInt(x_.value);

   if(x%2!==0 && x%5===0)
   {
       wynik.innerHTML = `Tak`;
   }
   else
   {
       wynik.innerHTML = `Nie`;
   }
});