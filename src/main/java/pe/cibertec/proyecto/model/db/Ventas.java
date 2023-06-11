package pe.cibertec.proyecto.model.db;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;
@Data
@Entity
@Table(name = "ventas")
public class Ventas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_ventas;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name ="vnt_idclientes")
	private Clientes cliente;
	
	@Column(name = "vnt_fecha")
	private String vnt_fecha;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name ="vnt_idproducto")
	private Productos producto;
	
	@Column(name = "vnt_cantidad")
	private Integer vnt_cantidad;
}
