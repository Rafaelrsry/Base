package pe.cibertec.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.request.ClienteRequest;
import pe.cibertec.proyecto.service.ClienteService;

import pe.cibertec.proyecto.response.ResultadoResponse;


@Controller
@RequestMapping("/cliente")
public class ClientesController {

	@Autowired
	private ClienteService clienteService;
	
	
	@GetMapping("/listarClientes")
	@ResponseBody
	public List<Clientes> listarClientes(){
		return clienteService.listarClientes();
	}
	
	
	
	@PostMapping("/registrarCliente")
	@ResponseBody
	public ResultadoResponse registrarCliente(
			@RequestBody ClienteRequest clienteRequest
			) {
		String mensaje ="Cliente Registrado Correctamente";
		Boolean respuesta = true;
		try {			
			//Se puede aplicar el patrón Builder en estos objetos
			Clientes objCliente = new Clientes();
			
			if(clienteRequest.getId_clientes() > 0) {
				objCliente.setId_clientes(clienteRequest.getId_clientes());
			}
			objCliente.setCli_nombres(clienteRequest.getCli_nombres());
			objCliente.setCli_apellidos(clienteRequest.getCli_apellidos());
			objCliente.setCli_dni(clienteRequest.getCli_dni());
			objCliente.setCli_direccion(clienteRequest.getCli_direccion());
			objCliente.setCli_distrito(clienteRequest.getCli_distrito());
			objCliente.setCli_telefono(clienteRequest.getCli_telefono());
			
			clienteService.registrarCliente(objCliente);
			
			
		}catch(Exception ex) {
			mensaje = "Cliente no registrado";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
	
	
	@DeleteMapping("/eliminarCliente")
	@ResponseBody
	public ResultadoResponse eliminarClientes(
			@RequestBody ClienteRequest clienteRequest) {
		String mensaje = "Cliente Eliminado Correctamente";
		Boolean respuesta = true;
		try {
			clienteService.eliminarCliente(clienteRequest.getId_clientes());
		}catch (Exception e) {
			mensaje = "Cliente no eliminado";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
	
	
	
}
