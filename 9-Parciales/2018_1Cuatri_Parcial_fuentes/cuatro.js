		//ingresar 4 importes.
		// Primero mostrar el importe mas alto.
		//Segundo, si la suma de los importes supera los 100 tiene un desc del 10%.
		//Tercero, si la suma es mayor  a 50  tiene desc del 5%.
		//Cuarto, si la suma es menor a 50, tiene un 15% de recargo.

function mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioCuatro;
	var sumatoria;
	var mayor;
	var recuento;
	

		
	mayor = 0;
	precioUno = parseInt(prompt("Ingrese el primer precio"));
	precioDos = parseInt(prompt("Ingrese el segundo precio"));
	precioTres = parseInt(prompt("Ingrese el tercero precio"));
	precioCuatro = parseInt(prompt("Ingrese el cuarto precio"));
	
	sumatoria = precioUno + precioDos + precioTres + precioCuatro;	
		
	

	if(precioUno > precioDos)
	{
		mayor = precioUno;
	}else 
		{
			mayor = precioDos;
			if(mayor < precioTres)
			{
				if (mayor < precioCuatro)
					{
						mayor = precioCuatro;
					}else
						{
							mayor = precioTres;
						}
				 
			}
		}

	if(sumatoria > 100)
	{
		recuento =  0.90;
	}else if(sumatoria < 50 )
		{
			recuento =  1.15;
		}else
			{
				recuento =  0.95;
			}	

	sumatoria *= recuento;
			
	alert("El mayor precio es "+mayor+" y el total es "+sumatoria+".");

}		


