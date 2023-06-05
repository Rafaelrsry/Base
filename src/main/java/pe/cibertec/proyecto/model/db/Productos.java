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
@Table(name = "productos")
public class Productos {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_producto;
	

	@Column(name = "pdt_foto")
	private String pdt_foto;
	
	@Column(name = "pdt_producto")
	private String pdt_producto;
	
	@Column(name = "pdt_porcion")
	private Integer pdt_porcion;
	
	
	@Column(name = "pdt_tortaCompleta")
	private Integer pdt_tortaCompleta;
	
	
	@Column(name = "pdt_precioPorcion")
	private double pdt_precioPorcion;
	
	@Column(name = "pdt_precioCompleta")
	private double pdt_precioCompleta;
	
	@Column(name = "codigo")
	private String codigo;
	

	
}
