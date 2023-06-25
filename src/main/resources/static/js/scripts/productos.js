$(document).on("click", "#btnAgregarProduco", function(){
	editCSSdos()
	$("#arch").val("");
	$("#imagedefe").val("");
	
	
	$("#txtproducto").val("");
	$("#txtporciones").val("");
	$("#txtentera").val("");
	$("#txtprecioporcion").val("");
	$("#txtprecioentera").val("");
	$("#txtcodigo").val("");
	$("#hddidproducto").val("0");
	
	 $("#arch").show();
	 
	 $("#btnenviaractualizacionProducto").hide();
	 $("#btnGuardarProducto").show();
	
	 // Función para generar un número aleatorio de 6 dígitos
	  function generarNumeroAleatorio() {
	    var min = 100000; // Valor mínimo de 6 dígitos
	    var max = 999999; // Valor máximo de 6 dígitos
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  }

	  // Generar código único
	  function generarCodigoUnico() {
	    var codigo = 'P' + generarNumeroAleatorio().toString().padStart(6, '0');
	    return codigo;
	  }

	  // Verificar si el código ya existe en la tabla
	  function codigoExisteEnTabla(codigo) {
	    var tabla = document.getElementById('tableproductos');
	    for (var i = 1; i < tabla.rows.length; i++) { // Comenzar desde 1 para omitir la fila de encabezado
	      var codigoTabla = tabla.rows[i].cells[0].textContent; // Suponiendo que el código está en la primera celda de cada fila
	      if (codigo === codigoTabla) {
	        return true; // El código ya existe en la tabla
	      }
	    }
	    return false; // El código no existe en la tabla
	  }

	  // Generar un código único y asignarlo al campo txtcodigo
	  function generarYAsignarCodigo() {
	    var codigo;
	    do {
	      codigo = generarCodigoUnico();
	    } while (codigoExisteEnTabla(codigo));
	    document.getElementById('txtcodigo').value = codigo;
	  }

	  // Generar y asignar el código único al cargar la página
	  generarYAsignarCodigo();
	
	
	
	
	modo = 'agregar'
 		if (modo === 'agregar') {
 			tituloProducto.innerText = 'Agregar Producto' 
		}
	
	modalproductos.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')
	
});


$(document).on("click", ".btnactualizarFoto", function(){
	var rutaImagen = $(this).attr("data-pdt_foto");
	
	$("#hddidproducto").val($(this).attr("data-id_producto"));
	
	$("#imagedefe").attr("src", rutaImagen);
	
	$("#txtproducto").val($(this).attr("data-pdt_producto"));
	$("#txtporciones").val($(this).attr("data-pdt_porcion"));
	$("#txtentera").val($(this).attr("data-pdt_tortacompleta"));
	$("#txtprecioporcion").val($(this).attr("data-pdt_precioporcion"));
	$("#txtprecioentera").val($(this).attr("data-pdt_preciocompleta"));
	$("#txtcodigo").val($(this).attr("data-codigo"));
	
	
	 
	 $("#imagedefe").show(); // Mostrar la imagen
	 $("#arch").show();
	 $("#btnenviaractualizacionProducto").hide();
	 $("#btnGuardarProducto").show();
	
		modo = 'actualizar'
 if (modo === 'actualizar') {
		    tituloProducto.innerText = 'Actualizar Producto' 
		}
	modalproductos.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')
});



$(document).on("click", ".btnactualizarProducto", function(){
	var rutaImagen = $(this).attr("data-pdt_foto");
	
	$("#hddidproducto").val($(this).attr("data-id_producto"));
	$("#imagedefe").attr("src", rutaImagen);
	
	
	$("#nomfoto").val($(this).attr("data-pdt_foto"));
	
	$("#txtproducto").val($(this).attr("data-pdt_producto"));
	$("#txtporciones").val($(this).attr("data-pdt_porcion"))
	;
	$("#txtentera").val($(this).attr("data-pdt_tortacompleta"));
	$("#txtprecioporcion").val($(this).attr("data-pdt_precioporcion"));
	$("#txtprecioentera").val($(this).attr("data-pdt_preciocompleta"));
	$("#txtcodigo").val($(this).attr("data-codigo"));
	
	$("#imagedefe").show(); // Mostrar la imagen
	 $("#arch").hide();
	 $("#btnenviaractualizacionProducto").show();
	 $("#btnGuardarProducto").hide();
	 
		modo = 'actualizar'
 if (modo === 'actualizar') {
		    tituloProducto.innerText = 'Actualizar Producto' 
		}
	modalproductos.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')
});









$(document).on("click", "#btnGuardarProducto", function(e) {
    e.preventDefault();
    
    function validarCampoObligatorio(campo, mensajeError) {
    	  if ($(campo).val() === "") {
    	    $(mensajeError).text("Es obligatorio");
    	  } else {
    	    $(mensajeError).text("");
    	  }
    	}
    
    
    validarCampoObligatorio("#arch", "#errorfoto");
    validarCampoObligatorio("#txtproducto", "#errornompro");
    validarCampoObligatorio("#txtentera", "#errortortaentera");
    validarCampoObligatorio("#txtporciones", "#errorporciones");
    validarCampoObligatorio("#txtprecioporcion", "#errorprecioporcion");
    validarCampoObligatorio("#txtprecioentera", "#errorprecioentera");
    validarCampoObligatorio("#txtcodigo", "#errorcodigo");
    
  
    
    
    if($("#txtproducto").val() != "" 
		&& $("#txtentera").val() != ""
			&& $("#txtporciones").val() != ""
				&& $("#txtprecioporcion").val() != ""
					&& $("#txtprecioentera").val() != ""
						&& $("#txtcodigo").val() != ""){
    	
    	
    
    
    
    
    var inputFileImage = document.getElementById("arch");
    var file = inputFileImage.files[0];
    var data = new FormData();
    data.append("producto", file);

    var uploadPromise = $.ajax({
        url: "/producto/upload",
        type: "post",
        data: data,
        cache: false,
        contentType: false,
        processData: false
    });

    uploadPromise.done(function(res) {
        var pdt_foto = res; // Guardar la ruta del archivo en pdt_foto

        var registerPromise = $.ajax({
            url: "/producto/register",
            type: "post",
            data: {
            	"id_producto": $("#hddidproducto").val(),
                "pdt_foto": pdt_foto,
                "pdt_producto": $("#txtproducto").val(),
                "pdt_porcion": $("#txtporciones").val(),
                "pdt_tortacompleta": $("#txtentera").val(),
                "pdt_precioporcion": $("#txtprecioporcion").val(),
                "pdt_preciocompleta": $("#txtprecioentera").val(),
                "codigo": $("#txtcodigo").val()
            },
            success: function(data) {
            	
                ListarProductos();
                modalproductos.classList.add('ocultar')
          	  fondo.classList.add('ocultar')
                console.log("Registro exitoso");
                console.log("Respuesta del servidor:", data);
                // Otras acciones después del registro exitoso
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("Error en la solicitud:", textStatus, errorThrown);
            }
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error en la carga del archivo:", textStatus, errorThrown);
    });
    
    }
});





$(document).on("click", "#btnenviaractualizacionProducto", function(e){
	 e.preventDefault();
	$.ajax({
		type: "POST",
		url: "/producto/registrarProducto",
		contentType: "application/json",
		data: JSON.stringify({
			
	     	
			id_producto: $("#hddidproducto").val(),
			pdt_foto: $("#nomfoto").val(),
	
			pdt_producto:$("#txtproducto").val(),
			
			pdt_porcion:$("#txtporciones").val(),
			pdt_tortacompleta:$("#txtentera").val(),
			pdt_precioporcion:$("#txtprecioporcion").val(),
			pdt_preciocompleta:$("#txtprecioentera").val(),
			codigo:$("#txtcodigo").val()
			
			
		}),
		success: function(resultado){
            ListarProductos();
            modalproductos.classList.add('ocultar')
      	  fondo.classList.add('ocultar')
			console.log("Datos enviados:", JSON.parse(this.data)); // Mostrar los datos enviados en la consola
			console.log("Respuesta del servidor:", resultado); // Mostrar la respuesta del servidor en la consola
			alert(resultado.mensaje);
			
		}
	});
	
	
	  modalclientes.classList.add('ocultar')
	  fondo.classList.add('ocultar')
})



function ListarProductos(){
	$.ajax({
		type: "GET",
		url: "/producto/listarProductos",
		dataType: "json",
		success: function(resultado){
			//console.log(resultado);
			$("#tableproductos > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tableproductos > tbody").append("<tr>"+
						"<td>"+value.id_producto+"</td>"+
						"<td>"+"<span>"+"<img class='btnactualizarFoto'"+
						"data-id_producto='"+value.id_producto+"'"+
						"data-pdt_foto='"+value.pdt_foto+"'"+
						"data-pdt_producto='"+value.pdt_producto+"'"+
						"data-pdt_porcion='"+value.pdt_porcion+"'"+
						"data-pdt_tortacompleta='"+value.pdt_tortacompleta+"'"+
						"data-pdt_precioporcion='"+value.pdt_precioporcion+"'"+
						"data-pdt_preciocompleta='"+value.pdt_preciocompleta+"'"+
						"data-codigo='"+value.codigo+"' src='"+value.pdt_foto+"' alt=''>"+"<span>"+"</td>"+
						"<td>"+value.pdt_producto+"</td>"+
						"<td>"+value.pdt_porcion+"</td>"+
						"<td>"+value.pdt_tortacompleta+"</td>"+
						"<td>"+value.pdt_precioporcion+"</td>"+
						"<td>"+value.pdt_preciocompleta+"</td>"+
						"<td>"+value.codigo+"</td>"+
						"<td>"+
							"<button type='button' class='btn btn-light btnactualizarProducto'"+
							"data-id_producto='"+value.id_producto+"'"+
							"data-pdt_foto='"+value.pdt_foto+"'"+
							"data-pdt_producto='"+value.pdt_producto+"'"+
							"data-pdt_porcion='"+value.pdt_porcion+"'"+
							"data-pdt_tortacompleta='"+value.pdt_tortacompleta+"'"+
							"data-pdt_precioporcion='"+value.pdt_precioporcion+"'"+
							"data-pdt_preciocompleta='"+value.pdt_preciocompleta+"'"+
							"data-codigo='"+value.codigo+"'"+
							"><img class='imgtabla' src='img/editar.png'  th:src='@{/img/editar.png}' alt=''></button></td>"+
						"<td>"+
							"<button type='button' class='btn btn-danger btneliminarProducto'"+	
							"data-id_producto='"+value.id_producto+"'"+
							"data-pdt_producto='"+value.pdt_producto+"'"+
							
							"><img class='imgtabla' src='img/borrar.png'  th:src='@{/img/borrar.png}' alt=''></button></td>"+							
						"</tr>")
			})
			
			
		}
	})
}






$(document).on("click",".btneliminarProducto",function(){
	editCSS()
	$("#hddideliminarproducto").val("");
	$("#hddideliminarproducto").val($(this).attr("data-id_producto"));
	$("#mensajeeliminarprodu").text("¿Está seguro de eliminar al producto "+ 
			$(this).attr("data-pdt_producto")+"?");
	
	
	modalpreguntapro.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')

});




$(document).on("click", ".btneliminarpro", function(){
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/producto/eliminarProducto",
		data: JSON.stringify({
			
			id_producto: $("#hddideliminarproducto").val()
		}),
		success: function(resultado){
			
			ListarProductos()
			console.log("Datos enviados:", JSON.parse(this.data)); // Mostrar los datos enviados en la consola
			console.log(resultado)
			alert(resultado.mensaje);
			
		}
	}) 
	  modalpreguntapro.classList.add('ocultar')
	  fondo.classList.add('ocultar')
});


$(document).on("click", ".btnbusqueda", function(e){
	e.preventDefault();
	var nombre = $('#palabraclave').val();
	
	$.ajax({
		type: "GET",
		url: "/producto/listarpornombre",
		 data: { nombre: nombre },
		success: function(resultado){
			//console.log(resultado);
			$("#tableproductos > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tableproductos > tbody").append("<tr>"+
						"<td>"+value.id_producto+"</td>"+
						"<td>"+"<span>"+"<img class='btnactualizarFoto'"+
						"data-id_producto='"+value.id_producto+"'"+
						"data-pdt_foto='"+value.pdt_foto+"'"+
						"data-pdt_producto='"+value.pdt_producto+"'"+
						"data-pdt_porcion='"+value.pdt_porcion+"'"+
						"data-pdt_tortacompleta='"+value.pdt_tortacompleta+"'"+
						"data-pdt_precioporcion='"+value.pdt_precioporcion+"'"+
						"data-pdt_preciocompleta='"+value.pdt_preciocompleta+"'"+
						"data-codigo='"+value.codigo+"' src='"+value.pdt_foto+"' alt=''>"+"<span>"+"</td>"+
						"<td>"+value.pdt_producto+"</td>"+
						"<td>"+value.pdt_porcion+"</td>"+
						"<td>"+value.pdt_tortacompleta+"</td>"+
						"<td>"+value.pdt_precioporcion+"</td>"+
						"<td>"+value.pdt_preciocompleta+"</td>"+
						"<td>"+value.codigo+"</td>"+
						"<td>"+
							"<button type='button' class='btn btn-light btnactualizarProducto'"+
							"data-id_producto='"+value.id_producto+"'"+
							"data-pdt_foto='"+value.pdt_foto+"'"+
							"data-pdt_producto='"+value.pdt_producto+"'"+
							"data-pdt_porcion='"+value.pdt_porcion+"'"+
							"data-pdt_tortacompleta='"+value.pdt_tortacompleta+"'"+
							"data-pdt_precioporcion='"+value.pdt_precioporcion+"'"+
							"data-pdt_preciocompleta='"+value.pdt_preciocompleta+"'"+
							"data-codigo='"+value.codigo+"'"+
							"><img class='imgtabla' src='img/editar.png'  th:src='@{/img/editar.png}' alt=''></button></td>"+
						"<td>"+
							"<button type='button' class='btn btn-danger btneliminarProducto'"+	
							"data-id_producto='"+value.id_producto+"'"+
							"data-pdt_producto='"+value.pdt_producto+"'"+
							
							"><img class='imgtabla' src='img/borrar.png'  th:src='@{/img/borrar.png}' alt=''></button></td>"+							
						"</tr>")
			})
			
			
		}
	})
	
})



