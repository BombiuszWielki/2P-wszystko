const a_ = document.querySelector("#a");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let a = parseInt(a_.value);

   wynik.innerHTML = ``;

   for(let i=1; i<=a; i++)
   {
       let x = Math.round(Math.random()*(9-1)+1);
       wynik.innerHTML += `${x}: `;
       for(let j=1; j<=x; j++)
       {
           wynik.innerHTML += `|`;
       }
       wynik.innerHTML += `<br>`;
   }
});