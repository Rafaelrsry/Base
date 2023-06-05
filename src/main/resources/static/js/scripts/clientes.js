








$(document).on("click", "#btnAgregarCliente", function(){
	
	$("#txtNombreCliente").val("");
	$("#txtApellidoCliente").val("");
	$("#txtNombreCliente").val("");
	$("#txtDniCliente").val("");
	$("#txtDireccionCliente").val("");
	$("#txtDistritoCliente").val("");
	$("#txtTelefonoCliente").val("");
	$("#hddidcliente").val("0");
	
	
	
	
	modo = 'agregar'
 if (modo === 'agregar') {
		    tituloCliente.innerText = 'Agregar Cliente' 
		}
	
	modalclientes.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')
	
});




$(document).on("click", ".btnactualizarCliente", function(){
	
	$("#hddidcliente").val($(this).attr("data-id_clientes"));
	$("#txtNombreCliente").val($(this).attr("data-cli_nombres"));
	$("#txtApellidoCliente").val($(this).attr("data-cli_apellidos"));
	$("#txtDniCliente").val($(this).attr("data-cli_dni"));
	$("#txtDireccionCliente").val($(this).attr("data-cli_direccion"));
	$("#txtDistritoCliente").val($(this).attr("data-cli_distrito"));
	$("#txtTelefonoCliente").val($(this).attr("data-cli_cli_telefono"));
	


	
		modo = 'actualizar'
 if (modo === 'actualizar') {
		    tituloCliente.innerText = 'Actualizar Cliente' 
		}
modalclientes.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')
});



$(document).on("click",".btneliminarCliente",function(){
	$("#hddideliminarcliente").val("");
	$("#hddideliminarcliente").val($(this).attr("data-id_clientes"));
	$("#mensajeeliminar").text("¿Está seguro de eliminar al cliente "+ 
			$(this).attr("data-cli_nombres")+" "+$(this).attr("data-cli_apellidos")+"?");
	
	
	 modalpregunta.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')

});




$(document).on("click", ".btneliminar", function(){
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/cliente/eliminarCliente",
		data: JSON.stringify({
			
			id_clientes: $("#hddideliminarcliente").val()
		}),
		success: function(resultado){
			
			ListarClientes();
			console.log("Datos enviados:", JSON.parse(this.data)); // Mostrar los datos enviados en la consola
			console.log(resultado)
			alert(resultado.mensaje);
			
		}
	}) 
	  modalpregunta.classList.add('ocultar')
	  fondo.classList.add('ocultar')
});








$(document).on("click", "#btnGuardarCliente", function(){
	
	$.ajax({
		type: "POST",
		url: "/cliente/registrarCliente",
		contentType: "application/json",
		data: JSON.stringify({
			
			id_clientes: $("#hddidcliente").val(),
			cli_nombres: $("#txtNombreCliente").val(),
			cli_apellidos: $("#txtApellidoCliente").val(),
			cli_dni: $("#txtDniCliente").val(),
			cli_direccion: $("#txtDireccionCliente").val(),
			cli_distrito: $("#txtDistritoCliente").val(),
			cli_telefono: $("#txtTelefonoCliente").val(),
			
			
			
		}),
		success: function(resultado){
			ListarClientes();
			console.log("Datos enviados:", JSON.parse(this.data)); // Mostrar los datos enviados en la consola
			console.log("Respuesta del servidor:", resultado); // Mostrar la respuesta del servidor en la consola
			alert(resultado.mensaje);
			
		}
	});
	
	
	  modalclientes.classList.add('ocultar')
	  fondo.classList.add('ocultar')
})





function ListarClientes(){
	$.ajax({
		type: "GET",
		url: "/cliente/listarClientes",
		dataType: "json",
		success: function(resultado){
			//console.log(resultado);
			$("#tableclientes > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tableclientes > tbody").append("<tr>"+
						"<td>"+value.id_clientes+"</td>"+
						"<td>"+value.cli_nombres+"</td>"+
						"<td>"+value.cli_apellidos+"</td>"+
						"<td>"+value.cli_dni+"</td>"+
						"<td>"+value.cli_direccion+"</td>"+
						"<td>"+value.cli_distrito+"</td>"+
						"<td>"+value.cli_telefono+"</td>"+
						"<td>"+
							"<button type='button' class='btn btn-success btnactualizarCliente'"+
							"data-id_clientes='"+value.id_clientes+"'"+
							"data-cli_nombres='"+value.cli_nombres+"'"+
							"data-cli_apellidos='"+value.cli_apellidos+"'"+
							"data-cli_dni='"+value.cli_dni+"'"+
							"data-cli_direccion='"+value.cli_direccion+"'"+
							"data-cli_distrito='"+value.cli_distrito+"'"+
							"data-cli_cli_telefono='"+value.cli_telefono+"'"+
							"><i class='fas fa-pen'></i></button></td>"+
						"<td>"+
							"<button type='button' class='btn btn-danger btneliminarCliente'"+	
							" data-id_clientes='"+value.id_clientes+"'"+
							" data-cli_nombres='"+value.cli_nombres+"'"+
							" data-cli_apellidos='"+value.cli_apellidos+"'"+
							"><i class='fas fa-trash'></i></button></td>"+							
						"</tr>")
			})
			
			
		}
	})
}


