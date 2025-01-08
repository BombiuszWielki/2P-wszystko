const b = window.prompt("Podaj A:");
const a = window.prompt("Podaj B:");
let y;

if(a<=0 && b<=0)
{
    let i=0;
    y=1;
    document.write(`i = ${i}<br>y = ${y}`);
}
else
{
    if(a<=0 && b >=0)
    {
        let i = 2;
        y = 1;
        document.write(`i = ${i}<br>y = ${y}`);
    }
    else
    {
        if(a>0 && b<=0)
        {
            let i=3;
            y=2;
            document.write(`i = ${i}<br>y = ${y}`);
        }
        else
        {
            let i=4;
            y=3;
            document.write(`i = ${i}<br>y = ${y}`);
        }
    }
}