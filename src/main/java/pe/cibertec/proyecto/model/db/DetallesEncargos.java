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
@Table(name = "detalles_encargos")
public class DetallesEncargos {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_detalles_encargo;
	
	@Column(name = "de_en_idencargo")
	private Integer de_en_idencargo;
	
	@Column(name = "de_en_idusuario")
	private Integer de_en_idusuario;
	
	
	
	
}
