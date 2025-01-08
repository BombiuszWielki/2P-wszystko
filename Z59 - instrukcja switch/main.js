const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let x = parseInt(x_.value);

    if(x>100 || x<0)
    {
        wynik.innerHTML= `Podaj prawidłową wartość`;
    }
    else
    {
        switch(true)
        {
            case x>=90:
                wynik.innerHTML = `Ocena studenta: 5`;
                break;
            case x>=80:
                wynik.innerHTML = `Ocena studenta: 4.5`;
                break;
            case x>=70:
                wynik.innerHTML = `Ocena studenta: 4`;
                break;
            case x>=60:
                wynik.innerHTML = `Ocena studenta: 3.5`;
                break;
            case x>=50:
                wynik.innerHTML = `Ocena studenta: 3`;
                break;
            default:
                wynik.innerHTML = `Ocena studenta: 2`;
                break;
        }
    }
});