class Punkt
{
    nazwa;
    x;
    y;

    constructor(nazwa, wX, wY)
    {
        this.nazwa = nazwa;
        this.x = wX;
        this.y = wY;
    }

    info = function()
    {
        document.write(`Nazwa punktu: ${this.nazwa}. Koordynaty: x=${this.x}, y=${this.y}<br>`);
    }
}

class Odcinek
{
    nazwa;
    punkt1;
    punkt2;

    constructor(nazwa, punkt_1, punkt_2)
    {
        this. nazwa = nazwa;
        this.punkt1 = new Punkt(punkt_1);
        this.punkt2 = new Punkt(punkt_2);
    }

    dlugoscOdcinka = function()
    {
        document.write(`Dlugosc odcinka: ${Math.sqrt(Math.pow(punkt2.x - punkt1.x, 2) + (Math.pow(punkt2.y - punkt1.y, 2)))}<br>`);
    }

    info = function()
    {
        document.write(`Odcinek ${odc.nazwa} o punktach ${punkt1.nazwa} i ${punkt2.nazwa}<br>`);
    }
}

let punkt1 = new Punkt("Dom", 50, 100);
let punkt2 = new Punkt("Szkola", 75, 200);
punkt1.info();
punkt2.info();

let odc = new Odcinek("Dlugosc trasy dom-szkola", this.punkt1, this.punkt2);
odc.info();
odc.dlugoscOdcinka();
