package pe.cibertec.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Encargos;
import pe.cibertec.proyecto.repository.ClienteRepository;
import pe.cibertec.proyecto.repository.EncargoRepository;

@Service
public class EncargoService {

	@Autowired
	private EncargoRepository encargoRepository;
	
	public List<Encargos> listarEncargo(){
		return encargoRepository.findAll();
	}

	
	public void registrarEncargos(Encargos encargo) {
		encargoRepository.save(encargo);
	}
	
	public void eliminareEncargo(Integer id_encargos) {
		encargoRepository.deleteById(id_encargos);
	}
}
