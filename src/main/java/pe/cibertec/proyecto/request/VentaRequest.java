package pe.cibertec.proyecto.request;

import java.util.Date;

import lombok.Data;
import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Productos;

@Data
public class VentaRequest {

	
	private int id_ventas;
	private int id_clientes;
	private Date vnt_fecha;
	private int id_producto;
	private Integer vnt_cantidad;
}
