function mostrar()
{

	var contador;
	var numMinimo;
	var numMaximo;
	var numeroIngresado;
	var respuesta='si';
	// declarar variables
	
	contador = 0;
	minimo.value = 1000000;



	while(respuesta!='no')
	{
		contador += 1;
		numeroIngresado = prompt("Ingrese un  numero "+contador);	
		if(numeroIngresado < minimo.value)
		{
			minimo.value = numeroIngresado;	
		}
		if(maximo.value < numeroIngresado)
		{
			maximo.value = numeroIngresado;	
		}
		respuesta = prompt("Desea seguir agregando?");


	}




}//FIN DE LA FUNCIÓN