const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let a = parseFloat(a_.value);
   let b = parseFloat(b_.value);

    if(a+b>b && b+b>a)
    {
        let aPrzez2 = a / 2;

        let h2 = b**2 - aPrzez2**2;
        let h = Math.sqrt(h2);

        wynik.innerHTML =
            `
               a = ${a}<br>
               b = ${b}<br>
               Wysokość h = ${h}<br>
            `;
    }
    else
    {
        wynik.innerHTML = `Nie można zbudować takiego trójkąta!`;
    }
});