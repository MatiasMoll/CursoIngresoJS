function mostrar()
{	
		var razaElegida=0;
		var guerrero = 
		{
			vida: 0,
			fuerza: 0,
			velocidad: 0,
			inteligencia: 0
		};

		var mago = 
		{
			vida: 0,
			fuerza: 0,
			velocidad: 0,
			inteligencia: 0
		};

		var asesino = 
		{
			vida: 0,
			fuerza: 0,
			velocidad: 0,
			inteligencia: 0
		};

		for(contador=1; contador < 6; contador++)
		{
			razaElegida = Math.floor(Math.random()*3)+1;
			switch(razaElegida)
			{
				case 1:
					razaElegida="Guerrero";
					var razaElegida = new Object();
					razaElegida.vida = Math.floor(Math.random()*250)+100;
					razaElegida.fuerza = Math.floor(Math.random()*75)+75;
					razaElegida.velocidad = Math.floor(Math.random()*50)+50;
					razaElegida.inteligencia = Math.floor(Math.random()*0)+0;
				break;

				case 2:
					razaElegida="Mago";
					var razaElegida = new Object();
					razaElegida.vida = Math.floor(Math.random()*150)+25;
					razaElegida.fuerza = Math.floor(Math.random()*25)+30;
					razaElegida.velocidad = Math.floor(Math.random()*30)+15;
					razaElegida.inteligencia = Math.floor(Math.random()*300)+50;
				break;

				case 3:
					razaElegida="Asesino";
					var razaElegida = new Object();
					razaElegida.vida = Math.floor(Math.random()*200)+50;
					razaElegida.fuerza = Math.floor(Math.random()*50)+50;
					razaElegida.velocidad = Math.floor(Math.random()*100)+100;
					razaElegida.inteligencia = Math.floor(Math.random()*125)+20;
				break;

			}
			

			document.write("El "+razaElegida+contador+" tiene "+razaElegida.vida+" puntos de vida, "+razaElegida.fuerza+" puntos de fuerza, "+razaElegida.velocidad+" puntos de velocidad<br>");
		}

/*
	var numeroGenerado;
	var contadorDe1=0;
	var contadorDe2=0;
	var contadorDe3=0;
	var contadorDe4=0;
	var contadorDe5=0;
	var contadorDe6=0;
	var contadorDe7=0;
	var contadorDe8=0;
	var contadorDe9=0;
	var contadorDe10=0;


	for(contador = 0; contador<10000; contador++)
	{
		numeroGenerado = Math.floor(Math.random()*10)+1;
		console.log(numeroGenerado);
		switch(numeroGenerado)
		{
			case 1:
				contadorDe1++;
				break;

			case 2:
				contadorDe2++;
				break;

			case 3:
				contadorDe3++;
				break;	

			case 4:
				contadorDe4++;
				break;
				
			case 5:
				contadorDe5++;
				break;
				
			case 6:
				contadorDe6++;
				break;
				
			case 7:
				porcen = contadorDe7*100/contador;
				if(porcen > 6)
				{
					contador --;
					continue;
				}	
				contadorDe7++;
				break;
				
			case 8:
				contadorDe8++;
				break;
				
			case 9:
				contadorDe9++;
				break;
				
			case 10:
				contadorDe10++;
				break;							

		}

	}	

	document.write("El uno salio "+contadorDe1+" veces siendo la probabilidad de aparecer de "+contadorDe1*100/contador+"% <br>");
	document.write("El dos salio "+contadorDe2+" veces siendo la probabilidad de aparecer de "+contadorDe2*100/contador+"% <br>");
	document.write("El tres salio "+contadorDe3+" veces siendo la probabilidad de aparecer de "+contadorDe3*100/contador+"% <br>");
	document.write("El cuatro salio "+contadorDe4+" veces siendo la probabilidad de aparecer de "+contadorDe4*100/contador+"% <br>");
	document.write("El cinco salio "+contadorDe5+" veces siendo la probabilidad de aparecer de "+contadorDe5*100/contador+"% <br>");
	document.write("El seis salio "+contadorDe6+" veces siendo la probabilidad de aparecer de "+contadorDe6*100/contador+"% <br>");
	document.write("El siete salio "+contadorDe7+" veces siendo la probabilidad de aparecer de "+contadorDe7*100/contador+"% <br>");
	document.write("El ocho salio "+contadorDe8+" veces siendo la probabilidad de aparecer de "+contadorDe8*100/contador+"% <br>");
	document.write("El nueve salio "+contadorDe9+" veces siendo la probabilidad de aparecer de "+contadorDe9*100/contador+"% <br>");
	document.write("El diez salio "+contadorDe10+" veces siendo la probabilidad de aparecer de "+contadorDe10*100/contador+"% <br>");


	var palabra;
	palabra = "Luz Azul";


	for(i=0;i<palabra.length;i++)
	{
		console.log(palabra[i]);

	}
*/	

}