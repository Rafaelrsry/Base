package pe.cibertec.proyecto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.cibertec.proyecto.service.ClienteService;
import pe.cibertec.proyecto.service.UsuarioService;

@Controller
public class HomeController {

	
	
	@Autowired
	private ClienteService clienteService;
	@Autowired
	private UsuarioService usuarioService;
	
	
	
	
	@GetMapping({"/inicio","/","/home","/index"})
	public String listadoTotal(Model model) {
		model.addAttribute("listacliente", clienteService.listarClientes());
		model.addAttribute("listausuario", usuarioService.listarUsuario());
		
		
		return "inicio";
	}
	
	
	
}
