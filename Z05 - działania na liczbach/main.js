const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
   let a = parseInt(a_.value);
   let b = parseInt(b_.value);

    wynik.innerHTML =
        `
        ${a} + ${b} = ${a + b}<br>
        ${a} - ${b} = ${a - b}<br>
        ${a} * ${b} = ${a * b}<br>
        ${a} / ${b} = ${a / b} ~= ${Math.round(a / b)}<br>
        ${a} % ${b} = ${a % b}<br>
        ${a} ^ ${b} = ${a ** b}<br>
        `;
});