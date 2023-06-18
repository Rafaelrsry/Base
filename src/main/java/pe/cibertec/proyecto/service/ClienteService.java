package pe.cibertec.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Productos;
import pe.cibertec.proyecto.repository.ClienteRepository;


@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	public List<Clientes> listarClientes(){
		return clienteRepository.findAll();
	}
	
	public void registrarCliente(Clientes cliente) {
		clienteRepository.save(cliente);
	}
	
	public void eliminarCliente(Integer id_clientes) {
		clienteRepository.deleteById(id_clientes);
	}
	
	public List<Clientes> busqueda(String busqueda){
		if(busqueda!=null) {
			return clienteRepository.busqueda(busqueda);
		}
		return clienteRepository.findAll();
	}
		
}
