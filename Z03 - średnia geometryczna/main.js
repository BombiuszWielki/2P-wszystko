const liczba_a = document.querySelector("#a");
const liczba_b = document.querySelector("#b");
const liczba_c = document.querySelector("#c");
const liczba_d = document.querySelector("#d");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener('click', function(){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);
    let c = parseInt(liczba_c.value);
    let d = parseInt(liczba_d.value);

    let iloczyn = a * b * c * d;
    let srednia = iloczyn ** 0.25;

    wynik.innerHTML = `Średnia geometryczna: <b>${srednia}</b><br><br>Średnia geometryczna z zaokrągleniem: <b>${srednia.toFixed(3)}</b>`;
});