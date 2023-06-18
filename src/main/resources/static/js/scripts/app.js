//Variable que mantiene el estado visible del carrito
var carritoVisible = false;

//Espermos que todos los elementos de la pàgina cargen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function generarCodigoVenta() {
	  var codigo = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
	  document.getElementById("codigoventa").textContent = codigo;
	}


function ready(){
    
    //Agregremos funcionalidad a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }

    //Agrego funcionalidad al boton sumar cantidad
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

     //Agrego funcionalidad al buton restar cantidad
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

    //Agregamos funcionalidad al boton Agregar al carrito
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    //Agregamos funcionalidad al botón comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}
//Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked() {
	  // Obtener todos los elementos del carrito
	  var carritoItems = document.getElementsByClassName('carrito-item');
	  var precioTotalGeneral = 0;
	  var selectElement = document.getElementById('cli-sel');
	  var valorSeleccionado = selectElement.value;
	  var fechaActual = new Date();
	  var anio = fechaActual.getFullYear();
	  var mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
	  var dia = ("0" + fechaActual.getDate()).slice(-2);
	  
	  var codigoventa =document.getElementById('codigoventa').innerText;
	  
	  
	  var codevtn =document.getElementById('codigoventa').innerText;
		 var pagoadelantado = document.getElementById('anticipo').value;
		 var estadopedido = document.getElementById('list-estped').value;
  
	  var useractivo = 2;
	  
	  var fechaFormateada = anio + "-" + mes + "-" + dia;
	  var anticipo = document.getElementById('anticipo');
	  var valanticipo = anticipo.value
	  var estado = document.getElementById('list-estped');
	  var estadopedido = estado.value;
	  // Array para almacenar los pedidos
	  var pedidos = [];
	  
	  // Iterar sobre cada elemento del carrito
	  for (var i = 0; i < carritoItems.length; i++) {
	    var carritoItem = carritoItems[i];
	    
	    var titulo = carritoItem.getElementsByClassName('carrito-item-titulo')[0].innerText;
	    var precio = carritoItem.getElementsByClassName('carrito-item-precio')[0].innerText;
	    var cantidad = carritoItem.getElementsByClassName('carrito-item-cantidad')[0].value;
	    var spaned = carritoItem.getElementsByClassName('codigo')[0].innerText;
	    var ides = carritoItem.getElementsByClassName('ides')[0].innerText;
	    
	    var precioPorcion = parseFloat(precio.replace('S/.', ''));
	    var descuento = calcularDescuento(parseInt(cantidad), precioPorcion);
	    var precioTotalItem = (precioPorcion * parseInt(cantidad)) - descuento;
	    precioTotalGeneral += precioTotalItem;
	    var code = spaned;
	    var pretotalproducto = precio * cantidad;
	    if (cantidad % 20 === 0) {
	    	  var descuento = pretotalproducto * 0.2;
	    	  pretotalproducto -= descuento;
	    	}
	    // Crear un objeto con los datos del pedido actual
	    var pedidoActual = {
	    		id_ventas: 0,
	    		vnt_idclientes: valorSeleccionado,
	    		vnt_fecha: fechaFormateada,
	    		vnt_idproducto: ides,
	    		vnt_cantidad: cantidad,
	    		vnt_codigoventa: codevtn,
	    		vnt_valorventa: pretotalproducto,
	    };
	    
	    // Agregar el pedido actual al array de pedidos
	    pedidos.push(pedidoActual);
	    console.log("precio total por cada:", pretotalproducto);
	    console.log("ides:", ides);
	    console.log("codigo:", code);
	    console.log("Elemento:", titulo);
	    console.log("Precio unitario:", precioPorcion);
	    console.log("Cantidad:", parseInt(cantidad));
	    console.log("Descuento:", descuento);
	    console.log("Precio total con descuento:", 'S/.' + parseFloat(precioTotalItem.toFixed(2)));
	  }
	  console.log("antcipo",valanticipo);
	  console.log("Estado pedido ",estadopedido)
	  console.log("Cliente id:", valorSeleccionado);
	  console.log("Precio total general:", 'S/.' + precioTotalGeneral.toFixed(2));
	  
	  // Eliminar todos los elementos del carrito
	  var carritoItemsContainer = document.getElementsByClassName('carrito-items')[0];
	  while (carritoItemsContainer.hasChildNodes()) {
	    carritoItemsContainer.removeChild(carritoItemsContainer.firstChild);
	  }
	  
		$.ajax({
			type: "POST",
			url: "/encargos/registarEncargo",
			contentType: "application/json",
			data: JSON.stringify({
				
				codigoencargo: codevtn,
				enc_anticipo: pagoadelantado,
				enc_estado: estadopedido,
				
				
				
				
			}),
			success: function(resultado){
				
				  $.ajax({
					    url: '/appventas/registrarVenta',
					    type: 'POST',
					    contentType: 'application/json',
					    data: JSON.stringify(pedidos),
					    success: function(response) {
					    	
					    	$.ajax({
								type: "POST",
								url: "/detalleventa/registarDetalleventa",
								contentType: "application/json",
								data: JSON.stringify({
												
								}),
								success: function(resultado){
									alert(resultado.mensaje);
									console.log(resultado);
								}
							});
					    	console.log(pedidos)
					      console.log("Pedidos creados exitosamente");
					    },
					    error: function(error) {
					    	console.log(pedidos)
					      console.error("Error al crear los pedidos");
					    }
					  });
				
				console.log("Datos enviados:", JSON.parse(this.data)); // Mostrar los datos enviados en la consola
				console.log("Respuesta del servidor:", resultado); // Mostrar la respuesta del servidor en la consola
				alert(resultado.mensaje);
				
			}
		});
	  
	  
	  
	  // Enviar los datos al backend de Spring utilizando AJAX
	
	  
	  actualizarTotalCarrito();
	  ocultarCarrito();
	}



/*
var id = 0;
var idcliente = 11
var fecha = 2026
var idproducto = 22
var cantidad = 50/*
$(document).on("click", ".btn-pagar", function(){
	
	$.ajax({
		type: "POST",
		url: "/appventas/registrarVenta",
		contentType: "application/json",
		data: JSON.stringify({
			
			id_ventas: id,
			vnt_idclientes: idcliente,
			vnt_fecha: fecha,
			vnt_idproducto:idproducto, 
			vnt_cantidad: cantidad,
			
			
			
		}),
		success: function(resultado){
			
			console.log("Datos enviados:", JSON.parse(this.data)); // Mostrar los datos enviados en la consola
			console.log("Respuesta del servidor:", resultado); // Mostrar la respuesta del servidor en la consola
			alert(resultado.mensaje);
			
		}
	});
	

})*/






//Funciòn que controla el boton clickeado de agregar al carrito
function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    var coded = item.getElementsByClassName('codigo')[0].innerText;
    var ides = item.getElementsByClassName('ides')[0].innerText;
    
    agregarItemAlCarrito(ides,coded,titulo, precio, imagenSrc);

    hacerVisibleCarrito();
}

//Funcion que hace visible el carrito
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    var items =document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}

//Funciòn que agrega un item al carrito
function agregarItemAlCarrito(ides, codigo, titulo, precio, imagenSrc) {
	  var item = document.createElement('div');
	  item.classList.add('item');
	  var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

	  // Controlamos que el item que intenta ingresar no se encuentre en el carrito
	  var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
	  for (var i = 0; i < nombresItemsCarrito.length; i++) {
	    if (nombresItemsCarrito[i].innerText == titulo) {
	      alert("El item ya se encuentra en el carrito");
	      return;
	    }
	  }

	  var itemCarritoContenido = `
	    <div class="carrito-item">
	        <img src="${imagenSrc}" width="80px" alt="">
	        <div class="carrito-item-detalles">
	            <span class="ides">${ides}</span>
	            <span class="codigo">${codigo}</span>
	            <span class="carrito-item-titulo">${titulo}</span>
	            <div class="selector-cantidad">
	                <i class="fa-solid fa-minus restar-cantidad"></i>
	                <input type="text" value="1" class="carrito-item-cantidad" disabled>
	                <i class="fa-solid fa-plus sumar-cantidad"></i>
	                <i class="fa-solid fa-cake-candles"></i>
	            </div>
	            <span>S/.</span>
	            <span class="carrito-item-precio">${precio}</span>
	        </div>
	        <button class="btn-eliminar">
	            <i class="fa-solid fa-trash"></i>
	        </button>
	    </div>
	  `;

	  item.innerHTML = itemCarritoContenido;
	  itemsCarrito.append(item);

	  // Agregamos la funcionalidad eliminar al nuevo item
	  item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

	  // Agregamos la funcionalidad restar cantidad del nuevo item
	  var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
	  botonRestarCantidad.addEventListener('click', restarCantidad);

	  // Agregamos la funcionalidad sumar cantidad del nuevo item
	  var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
	  botonSumarCantidad.addEventListener('click', sumarCantidad);

	  // Incrementamos la cantidad en múltiplos de 20 al hacer clic en el ícono de las velas
	  item.getElementsByClassName('fa-cake-candles')[0].addEventListener('click', function () {
	    var inputCantidad = item.getElementsByClassName('carrito-item-cantidad')[0];
	    var cantidad = parseInt(inputCantidad.value);
	    var cantidadModulo20 = cantidad % 20;
	    if (cantidadModulo20 !== 0) {
	      cantidad += 20 - cantidadModulo20;
	    } else {
	      cantidad += 20;
	    }
	    inputCantidad.value = cantidad;
	    actualizarTotalCarrito();
	  });

	  // Actualizamos el total del carrito
	  actualizarTotalCarrito();
	}




//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    //Actualizamos el total del carrito
    actualizarTotalCarrito();

    //la siguiente funciòn controla si hay elementos en el carrito
    //Si no hay elimino el carrito
    ocultarCarrito();
}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        var items =document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}
//Actualizamos el total de Carrito
// Actualizamos el total de Carrito
function actualizarTotalCarrito() {
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    var descuentoTotal = 0;
    var precioSinDescuento = 0;
  
    for (var i = 0; i < carritoItems.length; i++) {
      var item = carritoItems[i];
      var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
      var precio = parseFloat(precioElemento.innerText.replace('S/.', '').replace(',', ''));
      var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
      var cantidad = parseInt(cantidadItem.value);
  
      var precioItemSinDescuento = precio * cantidad;
      var descuentoItem = calcularDescuento(cantidad, precio);
      var precioItemConDescuento = precioItemSinDescuento - descuentoItem;
  
      total += precioItemConDescuento;
      descuentoTotal += descuentoItem;
      precioSinDescuento += precioItemSinDescuento;
    }
  
    total = Math.round(total * 100) / 100;
    descuentoTotal = Math.round(descuentoTotal * 100) / 100;
    precioSinDescuento = Math.round(precioSinDescuento * 100) / 100;
  
    document.getElementsByClassName('carrito-precio-total')[0].innerText = 'S/.' + total.toLocaleString("es") + ",00";
    document.getElementById("precioSinDescuento").innerText = 'S/.' + precioSinDescuento.toLocaleString("es") + ",00";
    document.getElementById("descuentoTotal").innerText = 'S/.' + descuentoTotal.toLocaleString("es") + ",00";
  }
  


  
  function calcularDescuento(cantidadPorciones, precioPorcion) {
    var gruposDescuento = Math.floor(cantidadPorciones / 20);
    var descuento = gruposDescuento * precioPorcion * 20 * 0.2;
    return descuento;
  }
  

  $(document).ready(function() {
	    $('.seleccion-cliente').select2();
	});
  
  
  
  
  
document.addEventListener("DOMContentLoaded", function() {
	
	// Controlador de eventos para el select ".seleccion-cliente"
	$(document).on("change", ".seleccion-cliente", function() {
	  var todo = document.getElementById("todo");

	  // Verificar si se ha seleccionado un cliente
	  if ($(this).val() !== '') {
	    todo.classList.remove('ocultar'); // Mostrar la sección de preguntas
	    todo.classList.remove('fadeIn')
	     todo.classList.add('fadeUp')
	  } else {
	    todo.classList.add('ocultar'); // Ocultar la sección de preguntas
	  }
	  
	  
	});

	
	
	var fondito = document.getElementById("fondonegro");
	var modal = document.getElementById("modal");
	var todo = document.getElementById("todo");
	
	  
	
	 $(document).on("click", ".btncancelado", function() {
		 todo.classList.remove('fadeUp')
		 todo.classList.add('fadeIn')
		 setTimeout(function() {
			  todo.classList.add('ocultar');
			}, 800);	  
			  });
	
	  $(document).on("click", ".close", function() {
		  
		  
		  modal.classList.add('ocultar')
			 fondito.classList.add('ocultar')
				  
			  });

	$(document).ready(function() {
	  var idClientes, nombre; // Variables para almacenar los valores seleccionados

	  // Asignar el evento change al select
	  $(".seleccion-cliente").change(function() {
	    idClientes = $(this).find("option:selected").data("id_clientes");
	    nombre = $(this).find("option:selected").data("cli_nombres");
	    apellido = $(this).find("option:selected").data("cli_apellidos");
	    dni = $(this).find("option:selected").data("cli_dni");
	    direccion = $(this).find("option:selected").data("cli_direccion");
	    distrito = $(this).find("option:selected").data("cli_distrito");
	    telefono = $(this).find("option:selected").data("cli_telefono");
	  });

	  // Controlador de eventos para el botón ".btncancelado"
	  $(document).on("click", ".btncancelado", function() {
 
		  
	  });

	  // Controlador de eventos para el botón ".btncorrecto"
	  $(document).on("click", ".btncorrecto", function() {
		 
		  
		
		  
		  modal.classList.remove('ocultar')
		 fondito.classList.remove('ocultar')
		 
		   $("#txtNombreCliente").val(nombre);
		  $("#txtApellidoCliente").val(apellido);
		  $("#txtDniCliente").val(dni);
		  $("#txtDireccionCliente").val(direccion);
			$("#txtDistritoCliente").val(distrito);
			$("#txtTelefonoCliente").val(telefono);
			$("#hddidcliente").val(idClientes);
		  
			
	  });
	});
	
	
	
	$(document).on("click", "#btnGuardarClientemod", function(){
		
		$.ajax({
			type: "POST",
			url: "/cliente/actualizarcliente",
			contentType: "application/json",
			data: JSON.stringify({
				
				id_clientes: $("#hddidcliente").val(),
				cli_nombres:$("#txtNombreCliente").val(),
				cli_apellidos:$("#txtApellidoCliente").val(),
				cli_dni:$("#txtDniCliente").val(),
				cli_direccion: $("#txtDireccionCliente").val(),
				cli_distrito: $("#txtDistritoCliente").val(),
				cli_telefono: $("#txtTelefonoCliente").val(),
				
				
				
			}),
			success: function(resultado){
				console.log("Datos enviados:", JSON.parse(this.data)); // Mostrar los datos enviados en la consola
				console.log("Respuesta del servidor:", resultado); // Mostrar la respuesta del servidor en la consola
				alert(resultado.mensaje);
				
			}
		});
		
		
		  modal.classList.add('ocultar')
			 fondito.classList.add('ocultar')
	})
	
	
	
	
	});
  
  


  
  
