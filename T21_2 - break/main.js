const a_ = document.querySelector("#a");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let a = parseInt(a_.value);

   wynik.innerHTML = ``;

    for(let i=1; i<=30; i++)
    {
        if(i<=a)
            wynik.innerHTML += `${i} ; `;
        else
            break;
    }
});