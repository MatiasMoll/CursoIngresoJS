function mostrar()
{
	var peso;
	var marca;
	var temperatura;
	var temperaturaPar=0;
	var maximoPeso=0;
	var maximoMarca;
	var minimoPeso=0;
	var promedioPeso=0;
	var sumaBajoCero=0;
	var contador = 0;
	var respuesta = "si";

	while(respuesta == "si")
	{
		contador++;
		peso = prompt("Ingrese una peso");
		peso = parseInt(peso);
		while(isNaN(peso) || peso <1 || peso >100)
		{
			peso = prompt("peso invalido, reingrese otro peso");
			peso = parseInt(peso);
		}

		marca = prompt("Ingrese una marca");
		while(!isNaN(marca))
		{
			marca = prompt("marca invalida, reingrese una marca");
		}

		temperatura = prompt("Ingrese una temperatura");
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura) || temperatura <-30 || temperatura >30)
		{
			temperatura = prompt("temperatura invalido, reingrese otro temperatura");
			temperatura = parseInt(temperatura);
		}

		promedioPeso += peso;

		if(temperatura != 0 && temperatura % 2 == 0)
		{
			temperaturaPar++;
		}

		if(contador == 1)
		{
			maximoPeso = peso;
			minimoPeso = peso;
			maximoMarca = marca;
		}else
			{
				if(maximoPeso<peso)
				{
					maximoPeso = peso;
					maximoMarca = marca;
				}
					
				if(minimoPeso>peso)
				{
					minimoPeso = peso;
				}	
			}

		if(temperatura<0)
		{
			sumaBajoCero++;
		}		

		respuesta=prompt("Desea seguir ingresando?");

	}
	promedioPeso = promedioPeso / contador;
	document.write("La cantidad de temperaturas pares es "+temperaturaPar+"<br>");
	document.write("La marca del producto mas pesado es "+maximoMarca+"<br>");
	document.write("La cantidad de productos que se conservan bajo cero es "+sumaBajoCero+"<br>");
	document.write("El promedio del peso de todos los productos es "+promedioPeso+"<br>");
	document.write("El peso maximo es "+pesoMaximo+"<br>");
	document.write("El peso minimo "+pesoMinimo+"<br>");

}
