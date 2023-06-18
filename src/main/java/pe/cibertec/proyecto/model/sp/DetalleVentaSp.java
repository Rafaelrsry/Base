package pe.cibertec.proyecto.model.sp;

import javax.persistence.Id;

import lombok.Data;

@Data
public class DetalleVentaSp {

	@Id
	private Integer iddetalles_ventas;
	private Integer det_idventa;
	private Integer det_idusuario;
}
