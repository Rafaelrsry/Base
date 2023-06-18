

$(document).on("click", ".btnbusquedaEnc", function(e){
  e.preventDefault();
  
  var busqueda = $('#palabraclaveEnc').val();

  $.ajax({
    type: "GET",
    url: "/appventas/listarbusqueda",
    data: { busqueda: busqueda },
	success: function(resultado) {
	    $("#tableencargos > tbody").html("");
	    $.each(resultado, function(index, value) {
	        var estado = value.encargo.estadopedido.estado;
	        var imagenSrc = '';
	        var clase = '';

	        if (estado === 'COMPLETADO') {
	            clase = 'btncompletado';
	            imagenSrc = '/img/COMPLETADO.png';
	        } else if (estado === 'NO COMPLETADO') {
	            clase = 'btnnocompletado';
	            imagenSrc = '/img/nocompletado.png';
	        }

	        $("#tableencargos > tbody").append("<tr>" +
	            "<td>" + value.encargo.codigoencargo + "</td>" +
	            "<td>" + value.producto.pdt_producto + "</td>" +
	            "<td>" + value.vnt_cantidad + "</td>" +
	            "<td>" + value.cliente.cli_nombres + ' ' + value.cliente.cli_apellidos + "</td>" +
	            "<td>" + value.encargo.enc_anticipo + "</td>" +
	            "<td>" + value.vnt_fecha + "</td>" +
	            "<td> <img class='" + clase + "' src='" + imagenSrc + "' alt='' data-codigoencargo='" + value.encargo.codigoencargo + "' data-estado='" + value.encargo.estadopedido.idestado + "'></td>" +
	            "<td>" +
	            "<button type='button' class='btn btn-danger btneliminarCliente'" +
	            "data-codigoencargo='" + value.encargo.codigoencargo + "'" +
	            "data-estado='" + value.encargo.estadopedido.idestado + "'" +
	            "><img class='imgtabla' src='img/borrar.png' alt=''></button></td>" +
	            "</tr>");
	    });
	}
  });
});



$(document).on("click", ".btnHisto", function(e) {
    e.preventDefault();

    var busqueda = $('#histo').val();

    $.ajax({
        type: "GET",
        url: "/detalleventa/listarbusqueda",
        data: { busqueda: busqueda },
        success: function(resultado) {
            // Filtrar solo los registros con estado 'COMPLETADO'
            var registrosFiltrados = resultado.filter(function(detalleventa) {
                return detalleventa.venta.encargo.estadopedido.estado === 'COMPLETADO';
            });

            // Limpiar la tabla antes de agregar las filas filtradas
            $("#tablehisto > tbody").html("");

            // Agregar las filas filtradas a la tabla HTML
            $.each(registrosFiltrados, function(index, value) {
                $("#tablehisto > tbody").append("<tr>" +
                    "<td>" + value.iddetalles_ventas + "</td>" +
                    "<td>" + value.venta.encargo.codigoencargo + "</td>" +
                    "<td>" + value.venta.vnt_fecha + "</td>" +
                    "<td>" + value.venta.producto.pdt_producto + "</td>" +
                    "<td>" + value.venta.vnt_cantidad + "</td>" +
                    "<td>" + value.venta.vnt_valorventa + "</td>" +
                    "<td>" + value.usuario.id_usuario + "</td>" +
                    "<td>" + value.venta.encargo.estadopedido.estado + "</td>" +
                    "</tr>");
            });
        }
    });
});







$(document).on("click", ".btncompletado", function(e) {
    e.preventDefault();  

var codigoencargo = $(this).attr("data-codigoencargo");
var estado = $(this).attr("data-estado");

$.ajax({
	type: "POST",
	url: "/encargos/actualizar",
	contentType: "application/json",
	data: JSON.stringify({	
		codigoencargo: codigoencargo,
		enc_estado: 1,
			
	}),
	success: function(resultado){
		listarEnc();
		alert(resultado.mensaje);
		
	}
});


})





$(document).on("click", ".btnnocompletado", function(e) {
    e.preventDefault();
    
var codigoencargo = $(this).attr("data-codigoencargo");
var estado = $(this).attr("data-estado");

$.ajax({
	type: "POST",
	url: "/encargos/actualizar",
	contentType: "application/json",
	data: JSON.stringify({
		codigoencargo: codigoencargo,
		enc_estado: 2,
		
	}),
	success: function(resultado){
		listarEnc();
		alert(resultado.mensaje);
		
	}
});

})




function listarEnc(){
	$.ajax({
		type: "GET",
		url: "/appventas/listarVentas",
		dataType: "json",
		success: function(resultado) {
		    $("#tableencargos > tbody").html("");
		    $.each(resultado, function(index, value) {
		        var estado = value.encargo.estadopedido.estado;
		        var imagenSrc = '';
		        var clase = '';

		        if (estado === 'COMPLETADO') {
		            clase = 'btncompletado';
		            imagenSrc = '/img/COMPLETADO.png';
		        } else if (estado === 'NO COMPLETADO') {
		            clase = 'btnnocompletado';
		            imagenSrc = '/img/nocompletado.png';
		        }

		        $("#tableencargos > tbody").append("<tr>" +
		            "<td>" + value.encargo.codigoencargo + "</td>" +
		            "<td>" + value.producto.pdt_producto + "</td>" +
		            "<td>" + value.vnt_cantidad + "</td>" +
		            "<td>" + value.cliente.cli_nombres + ' ' + value.cliente.cli_apellidos + "</td>" +
		            "<td>" + value.encargo.enc_anticipo + "</td>" +
		            "<td>" + value.vnt_fecha + "</td>" +
		            "<td> <img class='" + clase + "' src='" + imagenSrc + "' alt='' data-codigoencargo='" + value.encargo.codigoencargo + "' data-estado='" + value.encargo.estadopedido.idestado + "'></td>" +
		            "<td>" +
		            "<button type='button' class='btn btn-danger btneliminarEnc'" +
		            "data-id_ventas='" + value.id_ventas + "'" +
		            "data-producto='" + value.producto.pdt_producto + "'" +
		            "data-codigoencargo='" + value.encargo.codigoencargo + "'" +
		            "><img class='imgtabla' src='img/borrar.png' alt=''></button></td>" +
		            "</tr>");
		    });
		    listarhistorial()
		  
		}


	})
}






$(document).on("click",".btneliminarEnc",function(){
	editCSS()
	$("#hddideliminarencargo").val("");
	$("#hddideliminarencargo").val($(this).attr("data-id_ventas"));
	$("#mensajeeliminarEnc").text("¿Está seguro de eliminar el encargo con codigo "+ 
			$(this).attr("data-codigoencargo")+" y producto "+$(this).attr("data-producto")+"?");
	
	
	modalpreguntaenc.classList.remove('ocultar')
	  fondo.classList.remove('ocultar')

});




$(document).on("click", ".btneliminaren", function(){
	
	var idDetallesVentas = $("#hddideliminarencargo").val();
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/detalleventa/eliminardetalleventa",
		data: JSON.stringify({
			iddetalles_ventas: idDetallesVentas
		}),
		success: function(resultado){
			
			$.ajax({
				type: "DELETE",
				contentType: 'application/json',
				url: "/appventas/eliminarVenta",
				data: JSON.stringify({
					id_ventas: idDetallesVentas
				}),
				success: function(resultado){
					
					listarEnc()
					console.log("Datos enviados:", JSON.parse(this.data)); // Mostrar los datos enviados en la consola
					console.log(resultado)
					alert(resultado.mensaje);
					
				}
			}) 
			
			
		}
	}) 
	
	
	
	  modalpreguntaenc.classList.add('ocultar')
	  fondo.classList.add('ocultar')
});






function listarhistorial(){
    $.ajax({
        type: "GET",
        url: "/detalleventa/listarDetalleVentas",
        dataType: "json",
        success: function(resultado){
            $("#tablehisto > tbody").html("");
            $.each(resultado, function(index, value){
                if (value.venta && value.venta.encargo.estadopedido.estado === 'COMPLETADO') {
                    $("#tablehisto > tbody").append("<tr>"+
                            "<td>"+value.iddetalles_ventas+"</td>"+
                            "<td>"+value.venta.encargo.codigoencargo+"</td>"+
                            "<td>"+value.venta.vnt_fecha+"</td>"+
                            "<td>"+value.venta.producto.pdt_producto+"</td>"+
                            "<td>"+value.venta.vnt_cantidad+"</td>"+
                            "<td>"+value.venta.vnt_valorventa+"</td>"+
                            "<td>"+value.usuario.id_usuario+"</td>"+
                            "<td>"+value.venta.encargo.estadopedido.estado+"</td>"+
                            "</tr>");
                }
            });
        }
    });
}

