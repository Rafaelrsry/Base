package pe.cibertec.proyecto.model.db;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
@Data
@Entity
@Table(name = "ventas")
public class Ventas implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_ventas;
	
	@ManyToOne
	@JoinColumn(name ="vnt_idclientes")
	private Clientes cliente;
	
	@Column(name = "vnt_fecha")
	private String vnt_fecha;
	
	@ManyToOne
	@JoinColumn(name ="vnt_idproducto")
	private Productos producto;
	
	@Column(name = "vnt_cantidad")
	private Integer vnt_cantidad;
	
	@ManyToOne
	@JoinColumn(name ="vnt_codigoventa")
	private Encargos encargo;
	

	@Column(name = "vnt_valorventa")
	private double vnt_valorventa;
	
	


}
