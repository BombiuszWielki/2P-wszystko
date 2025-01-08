const n_ = document.querySelector("#n");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let n = parseInt(n_.value);

   wynik.innerHTML = ``;

   if(n<=0)
       wynik.innerHTML = `Błędne dane`;
   else
   {
       for(let i=1; i<=n; i++)
       {
           wynik.innerHTML += `1/${i} = ${(1/i).toFixed(6)}<br>`;
       }
   }
});