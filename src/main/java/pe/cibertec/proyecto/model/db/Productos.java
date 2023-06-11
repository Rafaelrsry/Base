package pe.cibertec.proyecto.model.db;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Formula;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@Table(name = "productos")
public class Productos implements Serializable {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_producto;
	

	@Column(name = "pdt_foto")
	private String pdt_foto;
	
	@Column(name = "pdt_producto")
	private String pdt_producto;
	
	@Column(name = "pdt_porcion")
	private Integer pdt_porcion;
	
	
	@Column(name = "pdt_tortacompleta")
	private Integer pdt_tortacompleta;
	
	
	@Column(name = "pdt_precioporcion")
	private double pdt_precioporcion;
	
	@Column(name = "pdt_preciocompleta")
	private double pdt_preciocompleta;
	

	@Column(name = "codigo")
	private String codigo;



}
