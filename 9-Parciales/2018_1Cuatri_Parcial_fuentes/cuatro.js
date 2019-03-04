		//ingresar 4 importes.
		// Primero mostrar el importe mas alto.
		//Segundo, si la suma de los importes supera los 100 tiene un desc del 10%.
		//Tercero, si la suma es mayor  a 50  tiene desc del 5%.
		//Cuarto, si la suma es menor a 50, tiene un 15% de recargo.

function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroUnoEntero;
	var numeroDosEntero;
	var mensaje;
	
	numeroUno = prompt("Ingrese el primer numero: ");
	numeroUnoEntero = parseInt(numeroUno);

	numeroDos = prompt("Ingrese el segundo numero: ");
	numeroDosEntero = parseInt(numeroDos);

	if(numeroUnoEntero == numeroDosEntero)
	{
		mensaje = numeroUno + numeroDos;
	}else
		{
			if(numeroUnoEntero>numeroDosEntero)
			{
				mensaje = numeroUnoEntero - numeroDosEntero;
			}else
				{
					mensaje = numeroUnoEntero + numeroDosEntero;
					if(mensaje>10)
					{
						mensaje = "la suma es "+mensaje+" y supero el 10";
					}
				}
		}
	alert(mensaje);
}
	

