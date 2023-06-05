package pe.cibertec.proyecto.model.db;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name = "encargos")
public class Encargos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_encargos;
	
	@Column(name = "enc_idventas")
	private Integer enc_idventas;
	
	@Column(name = "enc_anticipo")
	private double enc_anticipo;
	
	@Column(name = "enc_fechacreacion")
	private Date enc_fechaCreacion;
	
	@Column(name = "enc_fechaentrega")
	private Date enc_fechaEntrega;
	
	@Column(name = "enc_estado")
	private String enc_estado;
	
	
}
