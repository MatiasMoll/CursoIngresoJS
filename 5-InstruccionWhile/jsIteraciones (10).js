function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var sumaNegativo;
	var sumaPositivo;
	var cantPositivos;
	var cantNegativos;
	var cantCeros;
	var promedioPositivo;
	var promedioNegativo;
	var diferenciaPositivoNegativo;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador += 1;
		numeroIngresado = prompt("ingrese el numero "+contador);
		numeroIngresadoEntero = parseInt(numeroIngresado);
		if(numeroIngresadoEntero < 0)
		{
			cantNegativos += 1;
			sumaNegativo += numeroIngresadoEntero;
			promedioNegativo = cantNegativos / sumaNegativo;
		}else if (numeroIngresadoEntero > 0)
			{
				cantPositivos += 1;
				sumaPositivo += numeroIngresadoEntero;
				promedioPositivo = cantPositivos / sumaPositivo;
			}else 
				{
					cantCeros += 1;
				}
		respuesta = prompt("Desea seguir ingresando?");
	}

	alert ("La suma de los negativos es "+sumaNegativo);
	alert("La suma de los positivo es "+sumaPositivo);
	alert("La cantidad de positivos son "+cantPositivos);
	alert ("La suma de los negativos es "+sumaNegativo);
	alert("La suma de los positivo es "+sumaPositivo);
	alert("La cantidad de positivos son "+cantCeros);




}//FIN DE LA FUNCIÓN