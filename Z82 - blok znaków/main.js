const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let a = parseInt(a_.value);
   let b = parseInt(b_.value);

   if(a<=0 || b<=0)
   {
       wynik.innerHTML = `Błędne dane`;
   }
   else
   {
       wynik.innerHTML = ``;

       for(let i=1; i<=b; i++)
       {
           for(let j=1; j<=a; j++)
           {
               wynik.innerHTML += `X`;
           }
           wynik.innerHTML += `<br>`;
       }
   }
});