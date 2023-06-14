package pe.cibertec.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.cibertec.proyecto.model.db.TipoUsuario;
import pe.cibertec.proyecto.repository.TipoUsuarioRepository;


@Service
public class TipoUsuarioService {

	@Autowired
	private TipoUsuarioRepository tipouserRepository;
	
	public List<TipoUsuario> listarUsuarios(){
		return tipouserRepository.findAll();
	}
	
	public void TipoUsuario(TipoUsuario tipousuario) {
		tipouserRepository.save(tipousuario);
	}
	
	public void eliminarCliente(Integer idtipous) {
		tipouserRepository.deleteById(idtipous);
	}
}
