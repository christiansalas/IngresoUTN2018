function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

//while (sexo !="f" && sexo !="m") condicion que da true cuando el dato es válido

while (!(sexo == 'f'|| sexo == 'm'))
{




sexo = prompt("Ingreso un sexo valido");

}

if (sexo == 'f')
{
    sexo = "Femenino";

}
else
{
sexo  = "Masculino";

}

document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN