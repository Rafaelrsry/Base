package pe.cibertec.proyecto.model.db;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
	
	@Column(name = "ususuario")
	private String ususuario;
	
	@Column(name = "uspass")
	private String uspass;
	
	@Column(name = "us_nombres")
	private String us_nombres;
	
	@Column(name = "us_apellidos")
	private String us_apellidos;
	
	@Column(name = "us_ventas")
	private Integer us_ventas;
	
	@Column(name = "activo")
	private Boolean activo;
	
	@ManyToOne
	@JoinColumn(name ="us_tipo")
	private  TipoUsuario tipousuario;
	
	
	@ManyToMany(cascade = CascadeType.MERGE, 
			fetch = FetchType.EAGER)
	@JoinTable(name = "usuario_rol", 
		joinColumns = @JoinColumn(name = "idusuario"),
		inverseJoinColumns = @JoinColumn(name = "idrol"))
	private Set<TipoUsuario> roles;
	
}
