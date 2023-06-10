package pe.cibertec.proyecto.request;

import lombok.Data;

@Data
public class UsuarioRequest {

	
	private Integer id_usuario;
	private String us_usuario;
	private String us_pass;
	private String us_nombres;
	private String us_apellidos;
	private Integer us_ventas;
	private Integer us_tipo;
}
