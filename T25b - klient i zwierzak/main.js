function Klient(nazwisko_k, imie_k, zawod_k)
{
    this.nazwisko = nazwisko_k;
    this.imie = imie_k;
    this.zawod = zawod_k;
    this.wypisz = function ()
    {
        alert(this.nazwisko + ' ' + this.imie);
    }
    this.info = function ()
    {
        document.write(`Mam na imie ${this.imie} ${this.nazwisko}. Mój zawód to ${this.zawod}<br>`);
    }
}

function Zwierze(imie_z, gatunek_z, wlasciciel_z)
{
    this.imie = imie_z;
    this.gatunek = gatunek_z;
    this.wlasciciel = wlasciciel_z;
    this.info1 = function ()
    {
        document.write(`To jest ${this.imie}, jego gatunek to ${this.gatunek}, jego właścicielem jest ${this.wlasciciel.imie} ${this.wlasciciel.nazwisko}<br>`);
    }
}

let osoba1 = new Klient("Kowalski", "Jan", "kierowca autobusowy");
let osoba2 = new Klient("Nowak", "Anna", "sekretarka");
let zwierz1 = new Zwierze("Bąbel", "pies", osoba2);
////////////////////////////////////////////////////////////////////
let zwierz2 = new Zwierze("Kotek", "kot", "");
zwierz2.wlasciciel = osoba1;
zwierz2.imie = "Ziutek";
////////////////////////////////////////////////////////////////////
osoba1.wypisz();
osoba2.info();
zwierz1.info1();
zwierz2.info1();