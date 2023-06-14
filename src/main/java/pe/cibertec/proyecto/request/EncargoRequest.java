package pe.cibertec.proyecto.request;

import lombok.Data;

@Data
public class EncargoRequest {

	private Integer codigoencargo;
	private double enc_anticipo;
	private Integer enc_estado;
}
