/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random()*100) + 1;
	contadorIntentos = 0
	console.log(numeroSecreto); 
	

}

function verificar()
{
	var numeroIngresado;
	var clasificacion;

	contadorIntentos+= 1;
	
	numeroIngresado = numero.value

	if(numeroSecreto>numeroIngresado)
	{
		alert("Te falta");
	}else if(numeroSecreto<numeroIngresado)
		{	
		alert("Te pasaste");
		}else
		{
			if(contadorIntentos<6)
			{
				clasificacion = "Usted está en la media";

				if(contadorIntentos == 4)
				{
					clasificacion = "Excelente técnica";
				}else if(contadorIntentos==3)
					{
						clasificacion =  "Esto es suerte";
					}else if (contadorIntentos==2)
					 {
					 	clasificacion = "Excelente percepción";
					 }else if (contadorIntentos == 1)
					 	{
					 		clasificacion = "Usted es un Psíquico";
					 	}

			}
			else if(contadorIntentos>5 && contadorIntentos< 11)
				{
					clasificacion = "Falta técnica";
				}else
					{
						clasificacion = "Afortunado en el amor!!";
					}	
		intentos.value = contadorIntentos;
		alert("Felicidades, has adivinado el numero en " + contadorIntentos + " intentos. " + clasificacion );
		}
		

}