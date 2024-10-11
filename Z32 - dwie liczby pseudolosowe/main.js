const min = document.querySelector("#a");
const max = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let x = Math.round(Math.random()*(max-min)+min);
    let y = Math.round(Math.random()*(max-min)+min);

    if(x>y)
    {
        wynik.innerHTML = `${x} > ${y}`;
    }
    else if(x<y)
    {
        wynik.innerHTML = `${x} < ${y}`;
    }
    else
    {
        wynik.innerHTML = `${x} = ${y}`;
    }
});