const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let x = parseInt(x_.value);

   switch(x)
   {
       case 1:
       case 3:
       case 5:
       case 7:
       case 8:
       case 10:
       case 12:
           wynik.innerHTML = `31 dni`;
           break;
       case 4:
       case 6:
       case 9:
       case 11:
           wynik.innerHTML = `30 dni`;
           break;
       case 2:
           wynik.innerHTML = `Podaj rok: <input type="number" id="rok"><br><button id="dalej">Dalej</button><br>`;
           const rok_ = document.querySelector("#rok");
           const dalej = document.querySelector("#dalej");
           dalej.addEventListener("click", function (){
               let rok = parseInt(rok_.value);

               if(rok%4===0 && (rok%100!==0 || rok%400===0))
               {
                   wynik.innerHTML = `29 dni`;
               }
               else
               {
                   wynik.innerHTML = `28 dni`;
               }
           });
           break;
       default:
           wynik.innerHTML = `Nieprawidłowe dane`;
   }
});