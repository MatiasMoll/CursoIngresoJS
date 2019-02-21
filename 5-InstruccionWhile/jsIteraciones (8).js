function mostrar()
{

	var contador;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta ='si';
	contador = 0;

	while(respuesta == "si")
	{
		contador +=1;	
		numeroIngresado = prompt("Ingrese el "+contador+" numero");
		numeroIngresado = parseInt(numeroIngresado);
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