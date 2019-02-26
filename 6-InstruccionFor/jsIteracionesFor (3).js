function mostrar()
{

var numeroIngresado = prompt("ingrese el número a analizar");
var acumulador = 0;

numeroIngresado = parseInt(numeroIngresado);

	for(recorrido = numeroIngresado - 1;recorrido>0;recorrido--)
	{		
		for(numeroAnterior=recorrido - 1;numeroAnterior>0;numeroAnterior--)
		{
			if(numeroIngresado % numeroAnterior == 0)
			{	
				acumulador += numeroAnterior;
			}
		}
		if(acumulador == numeroIngresado)
		{
			console.log("Es numero perfecto " + numeroIngresado);
		}
	}


}//FIN DE LA FUNCIÓN