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


import pe.cibertec.proyecto.model.db.Usuarios;
import pe.cibertec.proyecto.request.ClienteRequest;
import pe.cibertec.proyecto.request.UsuarioRequest;
import pe.cibertec.proyecto.response.ResultadoResponse;
import pe.cibertec.proyecto.service.UsuarioService;

@Controller
@RequestMapping("/usuario")
public class UsuariosController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	
	@GetMapping("/listarUsuarios")
	@ResponseBody
	public List<Usuarios> listarUsuario(){
		return usuarioService.listarUsuario();
	}
	
	
	@PostMapping("/registrarUsuario")
	@ResponseBody
	public ResultadoResponse registrarUsuario(
			@RequestBody UsuarioRequest usuarioRequest
			) {
		String mensaje ="Envio Exitoso";
		Boolean respuesta = true;
		try {			
			//Se puede aplicar el patrón Builder en estos objetos
			Usuarios objUsuario = new Usuarios();
			
			if(usuarioRequest.getId_usuario() > 0) {
				objUsuario.setId_usuario(usuarioRequest.getId_usuario());
			}
			
			objUsuario.setUs_usuario(usuarioRequest.getUs_usuario());
			objUsuario.setUs_pass(usuarioRequest.getUs_pass());
			objUsuario.setUs_nombres(usuarioRequest.getUs_nombres());
			objUsuario.setUs_apellidos(usuarioRequest.getUs_apellidos());
			objUsuario.setUs_ventas(usuarioRequest.getUs_ventas());
			objUsuario.setUs_tipo(usuarioRequest.getUs_tipo());
			
			usuarioService.registrarUsuario(objUsuario);
			
		}catch(Exception ex) {
			mensaje = "No se realizaron modificaciones";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
	
	@DeleteMapping("/eliminarUsuario")
	@ResponseBody
	public ResultadoResponse eliminarUsuario(
			@RequestBody UsuarioRequest usuarioRequest) {
		String mensaje = "Usuario Eliminado Correctamente";
		Boolean respuesta = true;
		try {
			usuarioService.eliminarUsuario(usuarioRequest.getId_usuario());
		}catch (Exception e) {
			mensaje = "Usuario no eliminado";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
	
}
