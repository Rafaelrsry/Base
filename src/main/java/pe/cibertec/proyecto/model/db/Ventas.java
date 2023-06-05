package pe.cibertec.proyecto.model.db;

import java.util.Date;

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
@Table(name = "ventas")
public class Ventas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_ventas;
	
	@ManyToOne
	@JoinColumn(name = "id_clientes")
	private Clientes clientes;
	
	@Column(name = "vnt_fecha")
	private Date vnt_fecha;
	
	@ManyToOne
	@JoinColumn(name = "id_producto")
	private Productos productos;
	
	@Column(name = "vnt_cantidad")
	private Integer vnt_cantidad;
	
	
	
}
