package pe.cibertec.proyecto.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Productos;
import pe.cibertec.proyecto.model.db.Ventas;
import pe.cibertec.proyecto.repository.ClienteRepository;
import pe.cibertec.proyecto.repository.VentaRepository;

@Service
public class VentaService {
	
	@Autowired
	private VentaRepository ventaRepository;
	public void registrarVenta(Ventas venta) {
		ventaRepository.save(venta);
	}
	
	public List<Ventas> listarVentas(){
		return ventaRepository.findAll();
	}
	
	public void actProduct(
	int idecliente,
	String fecha,
	int idproducto,
	int cantidad
	
			) {
		Ventas venta = new Ventas();
	
		venta.setVnt_idclientes(idecliente);
		venta.setVnt_fecha(fecha);
		venta.setVnt_idproducto(idproducto);
		venta.setVnt_cantidad(cantidad);
		
		
		
		ventaRepository.save(venta);
	}
		
}
