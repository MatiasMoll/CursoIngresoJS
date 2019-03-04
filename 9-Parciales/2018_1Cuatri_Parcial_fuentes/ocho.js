function mostrar()
{
	var numero;
	var numeroPar=0;
	var numeroImpar=0;
	var contadorPositivo=0;
	var maximoNumero=0;
	var maximoLetra;
	var minimoNumero=0;
	var minimoLetra;
	var cantidadCero=0;
	var promedioPositivo=0;
	var sumaNegativo=0;
	var letra;
	var contador = 0;
	var respuesta = "si";

	while(respuesta == "si")
	{
		contador++;
		numero = prompt("Ingrese una numero");
		numero = parseInt(numero);
		while(isNaN(numero))
		{
			numero = prompt("numero invalido, reingrese otro numero");
			numero = parseInt(numero);
		}

		letra = prompt("Ingrese una letra");
		while(!isNaN(letra) || numero>100 || numero<-100)
		{
			letra = prompt("letra invalida, reingrese una letra");
		}

		if(numero != 0 && numero % 2 == 0)
		{
			numeroPar++;
		}else
			{
				if(numero !=0 && numero % 2 != 0)
				{
					numeroImpar++;
				}else
					{
						cantidadCero++;
					}
			}

		if(numero>0)
		{
			promedioPositivo += numero;
			contadorPositivo++;
		}else 
			{
				if(numero<0)
				{
					sumaNegativo += numero;
				}
			}

		if(contador == 1)
		{
			maximoNumero = numero;
			maximoLetra = letra;
			minimoNumero = numero;
			minimoLetra = letra;
		}else
			{
				if(maximoNumero<numero)
				{
					maximoNumero = numero;
					maximoLetra = letra;
				}
					
				if(minimoNumero>numero)
				{
					minimoNumero = numero;
					minimoLetra = letra;
				}	
					
			}

		respuesta=prompt("Desea seguir ingresando?");

	}
	promedioPositivo = promedioPositivo / contadorPositivo;
	document.write("La cantidad de numeros pares es "+numeroPar+"<br>");
	document.write("La cantidad de numeros impares es "+numeroImpar+"<br>");
	document.write("La cantidad de ceros es "+cantidadCero+"<br>");
	document.write("El promedio de los positivos es "+promedioPositivo+"<br>");
	document.write("La suma de los negativos es "+sumaNegativo+"<br>");
	document.write("La letra y el numero maximo es "+maximoLetra+" "+maximoNumero+"<br>");
	document.write("La letra y el numero minimo es "+minimoLetra+" "+minimoNumero+"<br>");


}
