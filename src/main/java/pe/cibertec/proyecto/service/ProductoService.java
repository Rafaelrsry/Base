package pe.cibertec.proyecto.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import pe.cibertec.proyecto.Generar;
import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Productos;
import pe.cibertec.proyecto.repository.ProductoRepository;

@Service
public class ProductoService {

	@Autowired
	private ProductoRepository productoRepository;
	
	public void registrarProducto(Productos producto) {
		productoRepository.save(producto);
	}
	
	public List<Productos> listarProductos(){
		return productoRepository.findAll();
	}
	
	
	public void eliminarProducto(Integer id_producto) {
		productoRepository.deleteById(id_producto);
	}
	
public String saveImg(MultipartFile file) {
	
	String ruta = "";
	if(!file.isEmpty()) {
		byte[] bytes;
		
		try {
			bytes = file.getBytes();
			
			 String nombre = Generar.code()+file.getOriginalFilename();
			 // Si quieres que se guarde sin refrescar :
			 // Crear en C una carpta img y luego otra llamada productos
			//  Path path = Paths.get("C://img//productos//" + nombre);
			//Path path = Paths.get(".//src//main//resources//static//img//productos//" + nombre);
			 Path path = Paths.get("img//productos//" + nombre);
			 Path rootAbsolutePath = path.toAbsolutePath();
			 
			String tipo = file.getContentType();
			
			switch(tipo) {
			case "image/png":
				Files.write(rootAbsolutePath, bytes);
				ruta = "/img/productos/"+nombre;
				break;
				
			case "image/jpg":
				Files.write(rootAbsolutePath, bytes);
				ruta = "/img/productos/"+nombre;
				break;
				
			case "image/gif":
				Files.write(rootAbsolutePath, bytes);
				ruta = "/img/productos/"+nombre;
				break;
				
			case "image/jpeg":
				Files.write(rootAbsolutePath, bytes);
				ruta = "/img/productos/"+nombre;
				break;
				
			default:
				ruta = "";
				break;
			}
		}catch (IOException ex) {
			ruta = "";
		}
	} return ruta;
}

public void GuardarImg(
		int id_producto,
		String pdt_foto,
		String pdt_producto,
		int pdt_porcion,
		int pdt_tortacompleta,
		double pdt_precioporcion,
		double pdt_preciocompleta,
		String codigo
		) {
	Productos producto = new Productos();
	producto.setId_producto(id_producto);
	producto.setPdt_foto(pdt_foto);
	producto.setPdt_producto(pdt_producto);
	producto.setPdt_porcion(pdt_porcion);
	producto.setPdt_tortacompleta(pdt_tortacompleta);
	producto.setPdt_precioporcion(pdt_precioporcion);
	producto.setPdt_preciocompleta(pdt_preciocompleta);
	producto.setCodigo(codigo);
	
	productoRepository.save(producto);
}
	

public void ActualizarPorcion(int id_producto,
		int pdt_porcion
		) {
	Productos producto = new Productos();
	producto.setId_producto(id_producto);
	producto.setPdt_porcion(pdt_porcion);
	productoRepository.save(producto);
}


public List<Productos> buscarnom(String nombre){
	if(nombre!=null) {
		return productoRepository.buscarPorNombre(nombre);
	}
	
	return productoRepository.findAll();
}
	

}
