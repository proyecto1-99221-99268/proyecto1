var opcionesBebidas=[
	{"nombre":"leche","cantidad":0,"id":1,"precioPorUnidad":5.00,"imagen":"img/bebida/leche.jpg"},
	{"nombre":"cafe","cantidad":0,"id":2,"precioPorUnidad":10.00,"imagen":"img/bebida/cafe1.jpg"},
	{"nombre":"te","cantidad":0,"id":3,"precioPorUnidad":8.00,"imagen":"img/bebida/te1.jpg"},
	{"nombre":"jugo","cantidad":0,"id":4,"precioPorUnidad":6.00,"imagen":"img/bebida/jugo1.jpg"},
	{"nombre":"yogur","cantidad":0,"id":5,"precioPorUnidad":9.00,"imagen":"img/bebida/yogur.jpg"},
	];

var precio=0;

function mostrarPrecio(elem,index){
	precio+=opcionesBebidas[index].precioPorUnidad;
	document.getElementById("precio").innerHTML=precio;	
	elem.removeEventListener("click", functionAgregar(hijos[index],index-1));
}

function laFuncion(){
	
	//traigo con ajax el archivo desde el server

	var i = 0;
	while (i<opcionesBebidas.length){
		var nuevoDiv = document.createElement("DIV");
	    var t = document.createTextNode(opcionesBebidas[i].nombre);
		nuevoDiv.appendChild(t);
	    document.getElementById("caja").appendChild(nuevoDiv);
	    i++;
	}
		//document.getElementById("precio").innerHTML=document.getElementById("caja").childNodes[1].;

	agregarEventos();
}
function agregarEventos(){
	var caja = document.getElementById("caja");

	var hijos = caja.childNodes;

  	for (var i = 1; i < hijos.length; i++) {
		hijos[i].addEventListener("click", functionAgregar(hijos[i],i-1));
			
	}
}

function functionAgregar(elem,i){
	return function(){
		mostrarPrecio(elem,i);

	}

}