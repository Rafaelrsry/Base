package pe.cibertec.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Usuarios;
import pe.cibertec.proyecto.repository.TipoUsuarioRepository;
import pe.cibertec.proyecto.repository.UsuarioRepository;

@Service
public class UsuarioService {

	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private TipoUsuarioRepository tipousarioRepository;
	
	private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
	
	
	public Usuarios buscarUsuarioPorNomusuario(String nomUsuario) {
	return usuarioRepository.findByususuario(nomUsuario);
}
	
	
	public List<Usuarios> listarUsuario(){
		return usuarioRepository.findAll();
	}
	
	public void registrarUsuario(Usuarios usuario) {
		usuarioRepository.save(usuario);
	}
	
	public void eliminarUsuario(Integer id_usuario) {
		usuarioRepository.deleteById(id_usuario);
	}
	
	
	public List<Usuarios> busqueda(String busqueda){
		if(busqueda!=null) {
			return usuarioRepository.busqueda(busqueda);
		}
		return usuarioRepository.findAll();
	}
		
}
