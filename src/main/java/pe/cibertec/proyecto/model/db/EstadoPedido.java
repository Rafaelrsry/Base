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
@Table(name = "estadopedido")
public class EstadoPedido {

	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idestado;
	
	@Column(name = "estado")
	private String estado;
}
