const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let a = parseFloat(a_.value);
    let b = parseFloat(b_.value);

    let c2 = a**2 + b**2;
    let c = Math.sqrt(c2);

    wynik.innerHTML =
        `
        a = ${a}<br>
        b = ${b}<br>
        <strong>c = ${c} ~= ${c.toFixed(2)}</strong>x
        `;
});