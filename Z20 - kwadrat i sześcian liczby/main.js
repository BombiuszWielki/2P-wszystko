const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let x = parseInt(x_.value);
    let k = x ** 2;
    let s = x ** 3;

    wynik.innerHTML =
        `
        liczba: ${x}<br>
        kwardat liczby: ${k}<br>
        sześcian liczby: ${s}<br>
        `;
})