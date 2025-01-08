const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let x = parseInt(x_.value);

    if(x%4==0 && (x%100!=0 || x%400==0))
    {
        wynik.innerHTML = `Rok jest przestępny`;
    }
    else
    {
        wynik.innerHTML = `Rok NIE jest przestępny`;
    }
});