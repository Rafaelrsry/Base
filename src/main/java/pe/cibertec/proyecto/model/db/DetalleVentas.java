package pe.cibertec.proyecto.model.db;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Id;




import lombok.Data;

@Data
@Entity
@Table(name="detalleventas")
public class DetalleVentas {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer iddetalles_ventas;
	
	@ManyToOne
	@JoinColumn(name ="det_idventa")
	private Ventas venta;
	
	
	@ManyToOne
	@JoinColumn(name ="det_idusuario")
	private Usuarios usuario;
	
}
