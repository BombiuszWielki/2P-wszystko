const x_ = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let x = parseInt(x_.value);
    const rad1 = Math.PI / 180;
    let rad = x * rad1;

    wynik.innerHTML = `Wynik dla podanej wartości kątowej ${x}<sup>o</sup>: ${rad} rad ~= ${rad.toFixed(2)} rad`;
})