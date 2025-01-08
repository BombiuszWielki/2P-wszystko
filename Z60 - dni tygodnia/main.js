const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let x = parseInt(x_.value);

   switch(x)
   {
       case 1:
           wynik.innerHTML = `Dzień tygodnia: poniedziałek`;
           break;
       case 2:
           wynik.innerHTML = `Dzień tygodnia: wtorek`;
           break;
       case 3:
           wynik.innerHTML = `Dzień tygodnia: środa`;
           break;
       case 4:
           wynik.innerHTML = `Dzień tygodnia: czwartek`;
           break;
       case 5:
           wynik.innerHTML = `Dzień tygodnia: piątek`;
           break;
       case 6:
           wynik.innerHTML = `Dzień tygodnia: sobota`;
           break;
       case 7:
           wynik.innerHTML = `Dzień tygodnia: niedziela`;
           break;
       default:
           wynik.innerHTML = `Wprowadzono błędne dane!`;
   }
});