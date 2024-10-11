const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const h_ = document.querySelector("#h");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let a = parseFloat(a_.value);
    let b = parseFloat(b_.value);
    let h = parseFloat(h_.value);

    let p = ((a+b)/2)*h;
    wynik.innerHTML =
        `
        a = ${a}<br>
        b = ${b}<br>
        h = ${h}<br>
        Pole trapezu: ${p.toFixed(2)}<br>
        `;
})