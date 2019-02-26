function mostrar()
{

	var notas;
	var sexo;
	var acumulador;
	var promedio;
	var menor;
	var sexoMenor;
	var varonesAprobados;

	acumulador = 0;
	varonesAprobados = 0;
	promedio =0;
	notas = 0;

	for(contador = 0; contador<5; contador++)
	{
		notas = prompt("Ingrese Nota; ");
		notas = parseInt(notas);
		
		while(isNaN(notas) || notas < 0 || notas > 10)
		{
			notas = prompt("Nota invalida, reitente.");
			notas = parseInt(notas);
		}		
		sexo = prompt("Ingrese el sexo del alumno (f o m): ");
		while(!isNaN(sexo) || sexo != "f" && sexo != "m")
		{
			sexo = prompt("Sexo Invalido, recuerde f para femenino o m para masculino: ");
		}
		if(contador==1)
		{
			menor = notas;
			sexoMenor = sexo;
		}	
		else if(notas < menor)
			{
				menor = notas;
				sexoMenor = sexo;
			}
		if(notas>5 && sexo == "m")
		{
			varonesAprobados += 1;
		}
		acumulador += notas;
	}
		promedio = acumulador / 5;
		alert("El promedio es "+promedio+" la nota mas baja es "+menor+" del sexo "+sexoMenor+" y la cantidad de varones aprobados es "+varonesAprobados);
}
