package pe.cibertec.proyecto.model.db;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name = "detalles_ventas")
public class DetallesVentas {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_detalles_ventas;
	
	@Column(name = "det_ve_idventa")
	private Integer det_ve_idventa;
	
	@Column(name = "det_ve_idusuario")
	private Integer det_ve_idusuario;
	
	
}
