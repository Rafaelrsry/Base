package pe.cibertec.proyecto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import pe.cibertec.proyecto.service.UsuarioService;


@Controller
@RequestMapping("/auth")
public class AuthController {

	
	@Autowired
	private UsuarioService usuarioService;
	
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
}
