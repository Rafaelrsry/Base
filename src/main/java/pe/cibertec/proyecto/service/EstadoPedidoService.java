package pe.cibertec.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.cibertec.proyecto.model.db.EstadoPedido;
import pe.cibertec.proyecto.model.db.Ventas;
import pe.cibertec.proyecto.repository.EstadoPedidoRepository;
import pe.cibertec.proyecto.repository.VentaRepository;

@Service
public class EstadoPedidoService {

	
	@Autowired
	private EstadoPedidoRepository estadopedidoRepository;
	
	
	public void registrarEstadoPedido(EstadoPedido estadopedido) {
		estadopedidoRepository.save(estadopedido);
	}
	
	public List<EstadoPedido> listarEstadopedido(){
		return estadopedidoRepository.findAll();
	}
	
	public void eliminarEstadoPedido(Integer idestado) {
		estadopedidoRepository.deleteById(idestado);
	}
}
