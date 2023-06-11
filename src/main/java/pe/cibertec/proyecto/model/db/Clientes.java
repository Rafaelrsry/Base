package pe.cibertec.proyecto.model.db;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "clientes")
public class Clientes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_clientes;
	
	@Column(name = "cli_nombres")
	private String cli_nombres;
	
	@Column(name = "cli_apellidos")
	private String cli_apellidos;
	
	@Column(name = "cli_dni")
	private Integer cli_dni;
	
	@Column(name = "cli_direccion")
	private String cli_direccion;
	
	@Column(name = "cli_distrito")
	private String cli_distrito;
	
	@Column(name = "cli_telefono")
	private Integer cli_telefono;
	

}
