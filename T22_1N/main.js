const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let x = parseInt(x_.value);
    wynik.innerHTML = `Liczba ${x} jest liczbą odkrytą`;

    sprawdz(x);
});

function sprawdz(a)
{
    let st = String(a);
    for(let i=0; i<st.length; i++)
    {
        if(a%st[i]!==0)
        {
            wynik.innerHTML = `Liczba ${a} nie jest liczbą odkrytą`;
            break;
        }
        else
            continue;
    }
}