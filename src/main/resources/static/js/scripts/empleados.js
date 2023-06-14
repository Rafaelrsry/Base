$(document).on("click", "#btnAgregarEmpleado", function(){
	
	$("#txtusuario").val("");
	$("#txtpassword").val("");
	$("#txtnombres").val("");
	$("#txtapellidos").val("");
	$("#txtventas").val("0");
	$("#txttipo").val("");
	$("#hddidusuario").val("0");
	
	
	
	modo = 'agregar'
 if (modo === 'agregar') {
	 tituloEmpleado.innerText = 'Agregar Empleado' 
		}
	
	modalempleados.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')
	
});



$(document).on("click", ".btnactualizarUsuario", function(){
	
	$("#hddidusuario").val($(this).attr("data-id_usuario"));
	$("#txtusuario").val($(this).attr("data-us_usuario"));
	$("#txtpassword").val($(this).attr("data-us_pass"));
	$("#txtnombres").val($(this).attr("data-us_nombres"));
	$("#txtapellidos").val($(this).attr("data-us_apellidos"));
	$("#txtventas").val($(this).attr("data-us_ventas"));
	$("#txttipo").val($(this).attr("data-us_tipo"));
	
	


	
		modo = 'actualizar'
 if (modo === 'actualizar') {
	 tituloEmpleado.innerText = 'Actualizar Empleado' 
		}
		modalempleados.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')
});




$(document).on("click",".btneliminarUsuario",function(){
	$("#hddideliminarusuario").val("");
	$("#hddideliminarusuario").val($(this).attr("data-id_usuario"));
	$("#mensajeeliminaremp").text("¿Está seguro de eliminar al usuario "+ 
	$(this).attr("data-us_nombres")+" "+$(this).attr("data-us_apellidos")+"?");
	
	
	 modalpreguntaemp.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')

});




$(document).on("click", ".btneliminarus", function(){
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/usuario/eliminarUsuario",
		data: JSON.stringify({
			
			id_usuario: $("#hddideliminarusuario").val()
		}),
		success: function(resultado){
			
			
			ListarEmpleados()
			alert(resultado.mensaje);
			
		}
	}) 
	  modalpreguntaemp.classList.add('ocultar')
	  fondo.classList.add('ocultar')
});




$(document).on("click", "#btnGuardarEmpleado", function(e){
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "/usuario/registrarUsuario",
		contentType: "application/json",
		data: JSON.stringify({
			
			id_usuario: $("#hddidusuario").val(),
			us_usuario: $("#txtusuario").val(),
			us_pass: $("#txtpassword").val(),
			us_nombres: $("#txtnombres").val(),
			us_apellidos: $("#txtapellidos").val(),
			us_ventas: $("#txtventas").val(),
			us_tipo: $("#txttipo").val(),
			
			
			
		}),
		success: function(resultado){
			ListarEmpleados()
			alert(resultado.mensaje);
			
		}
	});
	
	
	  modalempleados.classList.add('ocultar')
	  fondo.classList.add('ocultar')
})



function ListarEmpleados(){
	$.ajax({
		type: "GET",
		url: "/usuario/listarUsuarios",
		dataType: "json",
		success: function(resultado){
			//console.log(resultado);
			$("#tableempleados > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tableempleados > tbody").append("<tr>"+
						"<td>"+value.id_usuario+"</td>"+
						"<td>"+value.us_usuario+"</td>"+
						"<td>"+value.us_pass+"</td>"+
						"<td>"+value.us_nombres+"</td>"+
						"<td>"+value.us_apellidos+"</td>"+
						"<td>"+value.us_ventas+"</td>"+
						"<td>"+value.tipousuario.rolusuario+"</td>"+
						"<td>"+
							"<button type='button' class='btn btn-light btnactualizarUsuario'"+
							"data-id_usuario='"+value.id_usuario+"'"+
							"data-us_usuario='"+value.us_usuario+"'"+
							"data-us_pass='"+value.us_pass+"'"+
							"data-us_nombres='"+value.us_nombres+"'"+
							"data-us_apellidos='"+value.us_apellidos+"'"+
							"data-us_ventas='"+value.us_ventas+"'"+
							"data-us_tipo='"+value.tipousuario.idtipousuario+"'"+
							"><img class='imgtabla' src='img/editar.png'  th:src='@{/img/editar.png}' alt=''></button></td>"+
						"<td>"+
							"<button type='button' class='btn btn-danger btneliminarUsuario'"+	
							" data-id_usuario='"+value.id_usuario+"'"+
							" data-us_nombres='"+value.us_nombres+"'"+
							" data-us_apellidos='"+value.us_apellidos+"'"+
							"><img class='imgtabla' src='img/borrar.png'  th:src='@{/img/borrar.png}' alt=''></button></td>"+							
						"</tr>")
			})
			
			
		}
	})
}

