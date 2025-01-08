const m_ = document.querySelector("#m");
const h_ = document.querySelector("#h");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let a = parseFloat(m_.value);
    let b = parseFloat((h_.value)/100);

    bmi(a, b);
});

function bmi(m, h)
{
    let w = m / h**2;
    wynik.innerHTML = `Twoje BMI: ${w}<br>`;
    zakres(w);
}

function zakres(x)
{
    if(x>=40)
    {
        wynik.innerHTML += `Otyłość III stopnia`;
    }
    else if(x>35)
    {
        wynik.innerHTML += `Otyłość II stopnia`;
    }
    else if(x>30)
    {
        wynik.innerHTML += `Otyłość I stopnia`;
    }
    else if(x>25) {
        wynik.innerHTML += `Nadwaga`;
    }
    else if(x>18.5)
    {
        wynik.innerHTML += `Optimum`;
    }
    else if(x>17)
    {
        wynik.innerHTML += `Niedowaga`;
    }
    else if(x>16)
    {
        wynik.innerHTML += `Wychudzenie`;
    }
    else
    {
        wynik.innerHTML += `Wygłodzenie`
    }
}