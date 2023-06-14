package pe.cibertec.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.cibertec.proyecto.model.db.TipoUsuario;
import pe.cibertec.proyecto.service.TipoUsuarioService;



@Controller
@RequestMapping("/Tipo")
public class TipoUsuarioController {
	@Autowired
	private TipoUsuarioService tipousuService;
	
	@GetMapping("/listarUsuarios")
	@ResponseBody
	public List<TipoUsuario> listarUsuario(){
		return tipousuService.listarUsuarios();
	}

}
