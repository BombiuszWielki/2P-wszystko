const min_ = document.querySelector("#a");
const max_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let min = parseInt(min_.value);
    let max = parseInt(max_.value);

    if(min<max)
    {
        let a = Math.round(Math.random() * (max - min) + min);
        let b = Math.round(Math.random() * (max - min) + min);

        if(a>b)
        {
            wynik.innerHTML =
                `
           a = ${a}<br>
           b = ${b}<br>
           ${a} > ${b}<br>
           `;
        }

        else if(a<b)
        {
            wynik.innerHTML =
                `
           a = ${a}<br>
           b = ${b}<br>
           ${a} < ${b}<br>
           `;
        }

        else
        {
            wynik.innerHTML =
                `
           a = ${a}<br>
           b = ${b}<br>
           ${a} = ${b}<br>
           `;
        }
    }

    else
    {
        wynik.innerHTML = `Minimalna wartość nie może być większa od maksymalnej!`;
    }
});