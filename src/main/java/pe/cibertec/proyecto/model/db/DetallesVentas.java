package pe.cibertec.proyecto.model.db;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name = "detalles_ventas")
public class DetallesVentas {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer iddetalles_ventas;
	
	
	
	@ManyToOne
	@JoinColumn(name ="det_idventas")
	private Ventas venta;
	
	
	
	@ManyToOne
	@JoinColumn(name ="det_idusuario")
	private Usuarios usuario;

	
}
