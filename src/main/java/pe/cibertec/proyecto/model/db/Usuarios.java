package pe.cibertec.proyecto.model.db;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "usuarios")
public class Usuarios {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_usuario;
	
	@Column(name = "us_usuario")
	private String us_usuario;
	
	@Column(name = "us_pass")
	private String us_pass;
	
	@Column(name = "us_nombres")
	private String us_nombres;
	
	@Column(name = "us_apellidos")
	private String us_apellidos;
	
	@Column(name = "us_ventas")
	private Integer us_ventas;
	
	
	@ManyToOne
	@JoinColumn(name ="us_tipo")
	private  TipoUsuario tipousuario;
	
}
