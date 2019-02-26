function mostrar()
{
	var respuesta ="si";
	var numeroIngresado;
	var cantCeros = 0;
	var numeroPositivos = 0;
	var numerosPares = 0;
	var numerosImpares = 0;
	var promedio = 0;
	var positivo = 0;
	var negativo = 0;
	var letra;
	var letraMaximo;
	var minimo = 0;
	var maximo = 0;	
	var contador = 0 ;
	
	while(respuesta == "si")
	{	
		contador ++;
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) || numeroIngresado<-100 || numeroIngresado>100)
		{
			numeroIngresado = prompt("Numero invalido, reingrese un numero: ");
			numeroIngresado = parseInt(numeroIngresado);
		}	

		letra = prompt("Ingrese una letra: ");
		while(!isNaN(letra))
		{
			letra = prompt("Reingrese una letra valida(No numero!): ");
		}

		if(numeroIngresado % 2 == 0)
		{
			numerosPares += 1;
		}else if(numeroIngresado % 2 != 0)
			{
				numerosImpares += 1;
			}else
				{
					cantCeros +=1;
				}

		if(numeroIngresado>0)
		{
			positivo += numeroIngresado;
			numeroPositivos +=1;
		}else if(numeroIngresado<0)
			{
				negativo += numeroIngresado;
			}

		if(contador == 1)
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			letraMaximo = letra;
		}else if(maximo < numeroIngresado)
			{
				maximo = numeroIngresado;
				letraMaximo = letra;
			}else
				{
					minimo  = numeroIngresado;
					letra	= letra;
				}	
		respuesta = prompt("Desea seguir agregando?: ");		

	}	
	promedio = positivo / numeroPositivos;
	alert("La letra del numero maximo es: "+letraMaximo +", su maximo es "+maximo+",su minimo "+minimo+", el promedio "+promedio+",la suma de los negativos "+negativo+", la cantidad de 0 "+cantCeros+", los numeros pares "+numerosPares+" y los numeros impares "+numerosImpares);



}
