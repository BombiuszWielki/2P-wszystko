const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let a = parseInt(a_.value);
   let b = parseInt(b_.value);

   if(a>b)
   {
       let calosc = Math.floor(a/b);
       let licznik = a%b;
       let mianownik = b;

       if(licznik!==0)
       {
           wynik.innerHTML =
               `
            Licznik: ${a}<br>
            Mianownik: ${b}<br>
            Liczba mieszana: ${calosc} ${licznik}/${mianownik}<br>
            `;
       }
       else
       {
           wynik.innerHTML =
            `
            Licznik: ${a}<br>
            Mianownik: ${b}<br>
            Liczba mieszana: ${calosc}<br>
            `;
       }
   }
   else if(a<b)
   {
       wynik.innerHTML =
           `
           Licznik: ${a}<br>
           Mianownik: ${b}<br>
           Ułamek: ${a}/${b}<br>
           `;
   }
   else
   {
       wynik.innerHTML =
           `
           Licznik: ${a}<br>
           Mianownik: ${b}<br>
           Ułamek: 1<br>
           `;
   }
});