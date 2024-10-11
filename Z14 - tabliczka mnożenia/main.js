const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let y = parseInt(x_.value);
   let x = Math.trunc(y);

   wynik.innerHTML = `x = ${x}<br>`;

   for(i=0; i<=10; i++)
   {
       wynik.innerHTML += `${x} * ${i} = ${x * i}<br>`;
   }
});