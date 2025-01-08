const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let x = parseInt(x_.value);

   wynik.innerHTML = ``;

   for(let i=1; i<=15; i++)
   {
       if(i!==x)
           wynik.innerHTML += `${i} `;
       else
           wynik.innerHTML += `{-} `;
           continue;
   }
});