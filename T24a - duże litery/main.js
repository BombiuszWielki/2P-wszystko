const n = document.querySelector("#name");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");
btn.addEventListener("click", function (){
   let fullName = n.value;
   let parts = fullName.split(" ");
   let firstName = parts[0];
   let lastName = parts[1];

   firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
   lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    wynik.innerHTML = `Twoje imię to ${firstName} ${lastName}`;
});