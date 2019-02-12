/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

//Problemas con promedio
function Sumar () 
{
	var precioProducto1;
	var precioProducto2;
	var precioProducto3;
	var precioTotal;

	precioProducto1 = PrecioUno.value;
	precioProducto2 = PrecioDos.value;
	precioProducto3 = PrecioTres.value;

	precioEntero1 = parseInt(precioProducto1);
	precioEntero2 = parseInt(precioProducto2);
	precioEntero3 = parseInt(precioProducto3);

	precioTotal = (precioEntero1 + precioEntero2 + precioEntero3);

	alert("El total es " + precioTotal);
		
}
function Promedio () 
{
	
	var precioProducto1;
	var precioProducto2;
	var precioProducto3;
	var precioTotal;

	precioProducto1 = PrecioUno.value;
	precioProducto2 = PrecioDos.value;
	precioProducto3 = PrecioTres.value;

	precioEntero1 = parseInt(precioProducto1);
	precioEntero2 = parseInt(precioProducto2);
	precioEntero3 = parseInt(precioProducto3);

	precioTotal = (precioEntero1 + precioEntero2 + precioEntero3) / 3;

	alert("El promedio es " + precioTotal);		
}
function PrecioFinal () 
{
	
	var precioProducto1;
	var precioProducto2;
	var precioProducto3;
	var precioTotal;

	precioProducto1 = PrecioUno.value;
	precioProducto2 = PrecioDos.value;
	precioProducto3 = PrecioTres.value;

	precioEntero1 = parseInt(precioProducto1);
	precioEntero2 = parseInt(precioProducto2);
	precioEntero3 = parseInt(precioProducto3);

	precioTotal = (precioEntero1 + precioEntero2 + precioProducto3) * 1.21;

	alert("El precio final es " + precioTotal);
}	