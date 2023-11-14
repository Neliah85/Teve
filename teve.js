function tipp()
{
var teve = document.form1.teve1.value;
var strucc = document.form1.strucc1.value;

document.getElementById("eredmeny").innerText = "";

if(teve==0 || strucc==0)
{
    alert("Hibás adat");
}
else if(teve<5)
{
    alert("Ettől több teve van!");
}
else if(teve>5)
{
    alert("Ettől keveseb teve van!");
}
else if(strucc==19)
{
    document.getElementById("eredmeny").innerText="Helyes! 5 teve és 19 strucc van!";
}
else if(strucc<19)
{
    alert("Számold újra a struccokat!")
}
else if(strucc>19)
{
    alert("Számold újra a struccokat!")
}
}