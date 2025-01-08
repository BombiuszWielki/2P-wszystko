const a_ = document.querySelector("#a");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let a = parseInt(a_.value);

   wynik.innerHTML = ``;

   if(a<100)
   {
       for(let i=1; i<a+1; i++)
       {
           wynik.innerHTML += `${i} ; `;
       }
   }
   else
   {
       wynik.innerHTML = `100`;
   }
});