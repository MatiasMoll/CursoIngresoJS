function mostrar()
{

	var contador;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta='si';
	contador = 0;

	while(respuestaS="si")
	{
		contador +=1;	
		numeroIngresado = parseInt(prompt("Ingrese el "+contador+" numero"));
		if(numeroIngresado>=0)
		{
			positivo += numeroIngresado;
		}else
			{
				negativo *= numeroIngresado;
			}
		respuesta = prompt("Desea seguir agregando numeros?");	
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN