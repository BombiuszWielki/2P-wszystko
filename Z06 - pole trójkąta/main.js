const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const c_ = document.querySelector("#c");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
   let a = parseInt(a_.value);
   let b = parseInt(b_.value);
   let c = parseInt(c_.value);

   if(a+b>c && a+c>b && b+c>a)
   {
       let p = (a+b+c)/2;
       let s = Math.sqrt(p * (p-a) * (p-b) * (p-c));

       wynik.innerHTML =
           `
           a = ${a}<br>
           b = ${b}<br>
           c = ${c}<br>
           Pole trójkąta: ${s} ~= ${s.toFixed(2)}
           `
    }
   else
   {
       wynik.innerHTML = `Nie można zbudować trójkąta o danych bokach`;
   }
});