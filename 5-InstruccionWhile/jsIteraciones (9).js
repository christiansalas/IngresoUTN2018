function Mostrar()
{
	var numero;
	var maximo;
	var minimo;
	//var contador=0;
	var continuar;
	var flag=0;


do
{
numero = parseInt(prompt("Ingrese un unmero: "));
//contador ++; sacamos el contador para agregar el flag

//if (contador ==1) 
	
//maximo = numero;
//minimo = numero;

if (numero > maximo || flag ==0)  // agregamos el flag con valor 0 para que pase a la otra consulta
 {
	maximo = numero;
 }	
 if (numero < minimo || flag ==0) // idem anterior
 {
 minimo = numero;
 flag =1;  // le asignamos el valor 1 para no ingrese por todos if ya que tenemos valores cargados
 }

continuar = prompt("Quiere continuar? (si o no) ")
} while (continuar == "si");


document.getElementById('maximo').value=("El maximo es: ") + maximo;
document.getElementById('minimo').value=("El minimo es: ") + minimo;



}//FIN DE LA FUNCIÓN