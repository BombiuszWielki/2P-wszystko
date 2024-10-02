const t_ = document.querySelector("#t");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let t = parseFloat(t_.value);

   if(t>=-273.15 && t<= 1.41406*10**32)
   {
       let tf = t * (9/5) + 32;
       let tk = t + 273.15;

       wynik.innerHTML =
           `
           T<sub>Celsiusz</sub> = ${t}<sup>o</sup>C<br>
           T<sub>Fahrenheit</sub> = ${tf.toFixed(2)}<sup>o</sup>F<br>
           T<sub>Kelvin</sub> = ${tk.toFixed(2)}K<br>
           `;
   }
   else
   {
       wynik.innerHTML = `Temperatura nie może być niższa niż -273.15<sup>o</sup>C<br> Ani wyższa niż temperatura Plancka`;
   }
});