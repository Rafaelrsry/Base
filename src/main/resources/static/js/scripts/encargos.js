$(document).on("click", ".btnactualizarEncargo", function(){
	
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


