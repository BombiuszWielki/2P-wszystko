const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let a = parseInt(a_.value);
    let b = parseInt(b_.value);

    if(b===0)
    {
        wynik.innerHTML = `ZERO`;
    }
    else
    {
        if(a%b===0)
        {
            wynik.innerHTML = `TAK`;
        }
        else
        {
            wynik.innerHTML = `NIE`;
        }
    }
});