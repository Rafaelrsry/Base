package pe.cibertec.proyecto.request;

import java.util.Date;

import lombok.Data;
import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Productos;

@Data
public class VentaRequest {

	
	private Integer id_ventas;
	private Integer vnt_idclientes;
	private String vnt_fecha;
	private Integer vnt_idproducto;
	private Integer vnt_cantidad;
	
	private Integer vnt_codigoventa;
	private double vnt_valorventa;
}
