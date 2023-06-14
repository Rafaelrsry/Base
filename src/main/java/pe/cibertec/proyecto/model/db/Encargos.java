package pe.cibertec.proyecto.model.db;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
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
import javax.persistence.PostLoad;
import javax.persistence.Table;

import org.hibernate.Hibernate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "encargos")
public class Encargos implements Serializable {

	@Id
	private Integer codigoencargo;
	
	
	@Column(name = "enc_anticipo")
	private double enc_anticipo;
	
	@ManyToOne
	@JoinColumn(name ="enc_idestado")
	private EstadoPedido estadopedido;
	
	
	
	
}
