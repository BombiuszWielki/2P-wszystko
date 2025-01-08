const x1_ = document.querySelector("#x1");
const y1_ = document.querySelector("#y1");
const x2_ = document.querySelector("#x2");
const y2_ = document.querySelector("#y2");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let x1 = parseFloat(x1_.value);
   let y1 = parseFloat(y1_.value);
   let x2 = parseFloat(x2_.value);
   let y2 = parseFloat(y2_.value);

   if(x1<=0 || y1<=0 || x2<=0 || y2<=0)
   {
       wynik.innerHTML = `Błędne dane`;
   }
   else
   {
       let jeden = x1 * y1;
       let dwa = x2 * y2;

       wynik.innerHTML = `Pole pierwszego prostokątu: ${jeden}<br>Pole drugiego prostokątu: ${dwa}<br>`;

       if(jeden>dwa)
           wynik.innerHTML += `${jeden} > ${dwa}`;
       else if(jeden<dwa)
           wynik.innerHTML += `${jeden} < ${dwa}`;
       else
           wynik.innerHTML += `${jeden} = ${dwa}`;
   }
});