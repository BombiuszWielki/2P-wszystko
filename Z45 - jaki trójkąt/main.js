const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const c_ = document.querySelector("#c");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let a = parseFloat(a_.value);
   let b = parseFloat(b_.value);
   let c = parseFloat(c_.value);

   if(a+b>c && a+c>b && b+c>a)
   {
       if(a**2 + b**2 == c**2)
       {
           wynik.innerHTML = `Trójkąt jest prostokątny`;
       }
       else if(a==b && a==c)
       {
           wynik.innerHTML = `Trójkąt jest równoboczny`;
       }
       else if(a==b)
       {
           wynik.innerHTML = `Trójkąt jest równoramienny`;
       }
       else
       {
           wynik.innerHTML = `Trójkąt jest dowolny`;
       }

   }
   else
   {
       wynik.innerHTML = `Nie można zbudować trójkąta!`;
   }
});