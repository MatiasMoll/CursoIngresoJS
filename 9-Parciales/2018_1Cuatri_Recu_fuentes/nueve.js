function mostrar()
{
		var animal;
		var pesoAnimal=0;
		var pesoTotal=0;
		var temperaturaAmbiente=0;
		var cantidadTemperaturasPares=0;
		var promedioPeso=0;
		var nombreMasPesado;
		var temperaturaMasPesado;
		var pesoMasPesado;
		var animalesBajoCero=0;
		var pesoMaximoBajoCero;
		var pesoMinimoBajoCero;
		var promedioPeso = 0;
		var respuesta ="si";

		for(cantidadAnimales = 1; respuesta=="si";cantidadAnimales++)
		{
			animal = prompt("Ingrese el nombre del animal:");
			while(!isNaN(animal))
			{
				animal= prompt("Incorrecto, reingrese el nombre del animal: ");	
			}		
			pesoAnimal = prompt("Perfecto, ahora ingrese su peso(El del animal):");
			pesoAnimal = parseInt(pesoAnimal);
			while(isNaN(pesoAnimal)|| pesoAnimal<1 || pesoAnimal>1000)
			{
				pesoAnimal = prompt("Incorrecto, por favor reingrese su peso(El del animal):");
				pesoAnimal = parseInt(pesoAnimal);
			}

			temperaturaAmbiente = prompt("Ingrese la temperatura en la que debe estar el ambiente: ");
			temperaturaAmbiente = parseInt(temperaturaAmbiente);
			while(isNaN(temperaturaAmbiente) || temperaturaAmbiente< -30 || temperaturaAmbiente > 30 )
			{
				temperaturaAmbiente = prompt("Incorrecto, reingrese la temperatura en la que debe estar el ambiente: ");
				temperaturaAmbiente = parseInt(temperaturaAmbiente);
			}	

			if(temperaturaAmbiente%2 == 0)
			{
				cantidadTemperaturasPares ++;
			}
			if(cantidadAnimales == 1)
			{
				MasPesadonombre = animal;
				MasPesadotemperaturaAmbiente = temperaturaAmbiente;
				MasPesadopesoAnimal = pesoAnimal;
			}else
				{
					if(MasPesadopesoAnimal<pesoAnimal)
					{
						MasPesadonombre = animal;
						MasPesadotemperaturaAmbiente = temperaturaAmbiente;
						MasPesadopesoAnimal = pesoAnimal;
					}

				}
			if(temperaturaAmbiente<0)
			{
				animalesBajoCero++;
				if(animalesBajoCero == 1)
				{	
					pesoMinimoBajoCero = pesoAnimal;
					pesoMaximoBajoCero = pesoAnimal;
				}
				else 
				{	
					if(pesoMinimoBajoCero>pesoAnimal)
					{
						pesoMinimoBajoCero = pesoAnimal;
					}
					if(pesoMaximoBajoCero<pesoAnimal)
					{
						pesoMaximoBajoCero = pesoAnimal;
					}	
				}	
			}	
			pesoTotal +=pesoAnimal;
			
			
			respuesta=prompt("Desea seguir agregando?:");
			respuesta=respuesta.toLowerCase();
		}
		pesoPromedio = pesoTotal / cantidadAnimales;
		document.write("La cantidad de temperaturas pares es "+cantidadTemperaturasPares+"<br>");
		document.write("El animal mas pesado es "+nombreMasPesado+" pesando "+pesoMasPesado+" y vive a "+temperaturaMasPesado+"<br>");
		document.write("La cantidad de animales que viven en temperaturas bajo cero es de "+animalesBajoCero+"<br>");
		document.write("El peso maximo del animal que vive en temperaturas bajo cero "+pesoMaximoBajoCero+" y el peso minimo es "+pesoMinimoBajoCero+"<br>");
		document.write("El promedio de peso de todos los animales ingresados es de "+pesoPromedio);



}
