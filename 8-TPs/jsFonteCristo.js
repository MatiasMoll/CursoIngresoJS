/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	



}

function NumerosPares()
{
	var contador;

 	contador = numero.value;
 

	while(contador>0)
	{
		contador -= 1;
		if(contador % 2 == 0)
		{
			console.log(contador);
		}
	}

}

function NumerosImpares()
{
	var contador;

 	contador = numero.value;
 

	while(contador>0)
	{
		contador -= 1;
		if(contador % 2 == 1)
		{
			console.log(contador);
		}
	}
}

function NumerosDivisibles()
{
	var contador;
	var dato;

	contador = 100;
	dato = numero.value;

	while(contador>0)
	{
		contador -= 1;
		if(contador % dato  == 0)
		{
			console.log(contador);
		}
	}
}

function VerificarPrimo()
{
	var dato;

	dato = numero.value;

	while 
}