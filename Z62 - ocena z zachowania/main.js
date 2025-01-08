const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let x = parseInt(x_.value);

   switch(x)
   {
       case 0:
           wynik.innerHTML = `Nieklasyfikowany`;
           break;
       case 1:
       case 2:
       case 3:
           wynik.innerHTML = `Poprawny`;
           break;
       case 4:
       case 5:
           wynik.innerHTML = `Dobry`;
           break;
       case 6:
           wynik.innerHTML = `Wyróżniający`;
           break;
       default:
           wynik.innerHTML = `Niewłaściwa liczba`;
   }
});