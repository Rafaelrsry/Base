package pe.cibertec.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Encargos;
import pe.cibertec.proyecto.model.db.EstadoPedido;
import pe.cibertec.proyecto.model.db.Productos;
import pe.cibertec.proyecto.model.db.Ventas;
import pe.cibertec.proyecto.request.ClienteRequest;
import pe.cibertec.proyecto.request.EncargoRequest;
import pe.cibertec.proyecto.response.ResultadoResponse;
import pe.cibertec.proyecto.service.EncargoService;
import pe.cibertec.proyecto.service.ProductoService;

@Controller
@RequestMapping("/encargos")
public class EncargosController {

	
	@Autowired
	private EncargoService encargoService;
	
	@GetMapping("/listarEncargos")
	@ResponseBody
	public List<Encargos> listarProductos(){
		return encargoService.listarEncargo();
}
	
	@PostMapping("/registarEncargo")
	@ResponseBody
	public ResultadoResponse registrarEncargo(
			@RequestBody EncargoRequest encargoRequest
			) {
		String mensaje ="Envio Exitoso";
		Boolean respuesta = true;
		try {			
			//Se puede aplicar el patrón Builder en estos objetos
			Encargos objEncargo = new Encargos();
			
			EstadoPedido objEstadoPedido = new EstadoPedido();
			
			objEncargo.setCodigoencargo(encargoRequest.getCodigoencargo());
		//objVentas.setVnt_codigoventa(encargoRequest.getEnc_codigo());
		objEncargo.setEnc_anticipo(encargoRequest.getEnc_anticipo());
		objEstadoPedido.setIdestado(encargoRequest.getEnc_estado());
		//objEncargo.setVenta(objVentas);
		objEncargo.setEstadopedido(objEstadoPedido);
		encargoService.registrarEncargos(objEncargo);
			
		}catch(Exception ex) {
			mensaje = "No se realizaron modificaciones";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	

	@DeleteMapping("/eliminarEncargo")
	@ResponseBody
	public ResultadoResponse eliminarEncargo(
			@RequestBody EncargoRequest encargoRequest) {
		String mensaje = "Encargo Eliminado Correctamente";
		Boolean respuesta = true;
		try {
			encargoService.eliminareEncargo(encargoRequest.getCodigoencargo());
		
		}catch (Exception e) {
			mensaje = "Encargo no eliminado";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
	
}
