package pe.cibertec.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.DetalleVentas;
import pe.cibertec.proyecto.model.db.Productos;
import pe.cibertec.proyecto.model.db.Ventas;
import pe.cibertec.proyecto.request.ClienteRequest;
import pe.cibertec.proyecto.request.DetalleVentaRequest;
import pe.cibertec.proyecto.request.ProductoRequest;
import pe.cibertec.proyecto.response.ResultadoResponse;
import pe.cibertec.proyecto.service.DetalleVentaService;


@Controller
@RequestMapping("/detalleventa")
public class DetalleVentaController {

	
	@Autowired
	private DetalleVentaService detalleventaService;
	
	
	
	@GetMapping("/listarDetalleVentas")
	@ResponseBody
	public List<DetalleVentas> listarDetalles(){
		return detalleventaService.listarDetalles();
	}
	

	@GetMapping("/listarbusqueda")
	@ResponseBody
	public List<DetalleVentas> listarnom(@RequestParam("busqueda") String busqueda){
		return detalleventaService.busqueda(busqueda);
	}
	
	
	

	@PostMapping("/registarDetalleventa")
	@ResponseBody
	public ResultadoResponse registrardetallevent(
			@RequestBody DetalleVentas detallevent
			) {
		String mensaje ="Detalle venta registrado";
		Boolean respuesta = true;
		try {	
			
			detalleventaService.registrarDetalleventa(1);
			//empleadoService.registrarEmpleado(empleado);
		}catch(Exception ex) {
			mensaje = "No registrado det vent";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
	
	@DeleteMapping("/eliminardetalleventa")
	@ResponseBody
	public ResultadoResponse eliminarClientes(
			@RequestBody DetalleVentaRequest detalleventaRequest) {
		String mensaje = "Detalle Eliminado Correctamente";
		Boolean respuesta = true;
		try {
			detalleventaService.eliminardetalle(detalleventaRequest.getIddetalles_ventas());
		
		}catch (Exception e) {
			mensaje = "detalle no eliminado";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	


	
}
