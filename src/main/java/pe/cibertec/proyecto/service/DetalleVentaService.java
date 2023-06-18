package pe.cibertec.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.DetalleVentas;
import pe.cibertec.proyecto.model.db.Encargos;
import pe.cibertec.proyecto.model.db.Usuarios;
import pe.cibertec.proyecto.repository.DetalleVentaRepository;
import pe.cibertec.proyecto.repository.EncargoRepository;



@Service
public class DetalleVentaService {

	@Autowired
	private DetalleVentaRepository detalleventaRepository;
	
	public List<DetalleVentas> listarDetalles(){
		return detalleventaRepository.findAll();
	}
	
	public List<DetalleVentas> busqueda(String busqueda){
		if(busqueda!=null) {
			return detalleventaRepository.busqueda(busqueda);
		}
		return detalleventaRepository.findAll();
	}

	
	public void eliminardetalle(Integer id_detven) {
		detalleventaRepository.deleteById(id_detven);
	}
	
	public void registrarDetalleventa(int detvet) {
		
		detalleventaRepository.registrarDetallevent(
				detvet
				);
	}
}
