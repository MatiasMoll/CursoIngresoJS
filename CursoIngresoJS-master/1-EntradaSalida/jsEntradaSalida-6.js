/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var	segundoNumero;
	var suma;

	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;
	

	primerNumeroEntero = parseInt(primerNumero);
	segundoNumeroEntero =parseInt(segundoNumero);
	suma = primerNumeroEntero + segundoNumeroEntero;
	
	alert("La suma es " +suma);
}

