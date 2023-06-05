package pe.cibertec.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import pe.cibertec.proyecto.model.db.Usuarios;
import pe.cibertec.proyecto.repository.UsuarioRepository;

@Service
public class UsuarioService {

	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	
	public List<Usuarios> listarUsuario(){
		return usuarioRepository.findAll();
	}
	
	public void registrarUsuario(Usuarios usuario) {
		usuarioRepository.save(usuario);
	}
	
	public void eliminarUsuario(Integer id_usuario) {
		usuarioRepository.deleteById(id_usuario);
	}
}
