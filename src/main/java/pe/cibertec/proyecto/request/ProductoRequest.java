package pe.cibertec.proyecto.request;



import lombok.Data;

@Data
public class ProductoRequest {

	
	private Integer id_producto;
	private String pdt_foto;
	private String pdt_producto;
	private double pdt_porcion;
	private double pdt_tortacompleta;
	private double pdt_precioporcion;
	private double pdt_preciocompleta;
	private String codigo;
}
