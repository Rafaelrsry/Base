package pe.cibertec.proyecto.request;

import lombok.Data;



@Data
public class ClienteRequest {

	
	private Integer id_clientes;
	private String cli_nombres;
	private String cli_apellidos;
	private Integer cli_dni;
	private String cli_direccion;
	private String cli_distrito;
	private Integer cli_telefono;
	
}
