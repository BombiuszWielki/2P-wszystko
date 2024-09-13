const imie = document.querySelector('#imie');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let imie_text = imie.value;

    //wynik.innerHTML = '<h1>Witaj ' + imie_text + '!!!</h1>';

    wynik.innerHTML = `<h1>Witaj ${imie_text} !!!</h1><br>Miło cię widzieć na naszej stronie!!!`;
});