class Czolg
{
    nazwa = "Leopard";
    kolor = "czarny";
    amunicja = 7;

    info = function()
    {
        document.write(`Hej! Jestem czołgiem. Moja nazwa to ${this.nazwa}. Mój kolor to ${this.kolor}. Stan amunicji: ${this.amunicja}<br>`);
    }
    pomaluj = function(nowyKolor)
    {
        console.log(`Pomalowałem czołg na kolor ${nowyKolor}`);
        this.kolor = nowyKolor;
    }
    zaladuj = function(ileAmmo)
    {
        console.log(`Amunicja czołgu uzupełniona o ${ileAmmo}`);
        this.amunicja += ileAmmo;
    }
    strzal = function()
    {
        if(this.amunicja>0)
        {
            console.log(`Oddano strzał!`);
            this.amunicja--;
            document.write(`BOMBOCLAAAT (czołg strzelił)<br>`);
        }
        else
        {
            console.log(`Brak amunicji!`);
            document.write(`Brak amunicji!<br>`);
        }
    }
}

let czolg = new Czolg();
czolg.info();
czolg.pomaluj("niebieski");
czolg.zaladuj(5);
czolg.info();
czolg.strzal();
czolg.info();