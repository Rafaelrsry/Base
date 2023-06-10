package pe.cibertec.proyecto.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Productos;
import pe.cibertec.proyecto.request.ClienteRequest;
import pe.cibertec.proyecto.request.ProductoRequest;
import pe.cibertec.proyecto.response.ResultadoResponse;
import pe.cibertec.proyecto.service.ProductoService;

@Controller
@RequestMapping("/producto")
public class ProductoController {

	@Autowired
	private ProductoService productoService;
	
	@GetMapping("/listarProductos")
	@ResponseBody
	public List<Productos> listarProductos(){
		return productoService.listarProductos();
	}

	
	@PostMapping("/upload")
	@ResponseBody
	public String rutaSubida(
			@RequestParam("producto") MultipartFile file) {
		return productoService.saveImg(file);
	}
	
	
	@PostMapping("/register")
	@ResponseBody
	public ResponseEntity<String> inser(
			@RequestParam("id_producto") int id_producto,
	        @RequestParam("pdt_foto") String pdt_foto,
	        @RequestParam("pdt_producto") String pdt_producto,
	        @RequestParam("pdt_porcion") int pdt_porcion,
	        @RequestParam("pdt_tortacompleta") int pdt_tortacompleta,
	        @RequestParam("pdt_precioporcion") double pdt_precioporcion,
	        @RequestParam("pdt_preciocompleta") double pdt_preciocompleta,
	        @RequestParam("codigo") String codigo
	) {
	    productoService.GuardarImg(id_producto,pdt_foto, pdt_producto, pdt_porcion, pdt_tortacompleta, pdt_precioporcion, pdt_preciocompleta, codigo);
	    
	    // Construir y devolver una respuesta adecuada
	    return new ResponseEntity<>("Registro exitoso", HttpStatus.OK);
	}
	
	
	
	@PostMapping("/registrarProducto")
	@ResponseBody
	public ResultadoResponse registrarProducto(@RequestBody ProductoRequest productoRequest) {
		 {
				String mensaje ="Actualizacion Exitosa";
				Boolean respuesta = true;
				try {			
					//Se puede aplicar el patrón Builder en estos objetos
					Productos objProd = new Productos();
					
					if(productoRequest.getId_producto() > 0) {
						objProd.setId_producto(productoRequest.getId_producto());
					}
					objProd.setPdt_foto(productoRequest.getPdt_foto());
					objProd.setPdt_producto(productoRequest.getPdt_producto());
					objProd.setPdt_porcion(productoRequest.getPdt_porcion());
					objProd.setPdt_tortacompleta(productoRequest.getPdt_tortacompleta());
					objProd.setPdt_precioporcion(productoRequest.getPdt_precioporcion());
					objProd.setPdt_preciocompleta(productoRequest.getPdt_preciocompleta());
					objProd.setCodigo(productoRequest.getCodigo());
					productoService.registrarProducto(objProd);
					
					
				}catch(Exception ex) {
					mensaje = "No se realizaron modificaciones";
					respuesta = false;
				}
				return ResultadoResponse.builder()
						.mensaje(mensaje)
						.respuesta(respuesta)
						.build();
			}
		
	}
	
	
	
	
	
	@DeleteMapping("/eliminarProducto")
	@ResponseBody
	public ResultadoResponse eliminarProducto(
			@RequestBody ProductoRequest productoRequest) {
		String mensaje = "Cliente Eliminado Correctamente";
		Boolean respuesta = true;
		try {
			productoService.eliminarProducto(productoRequest.getId_producto());
			mensaje = "Producto eliminado ";
			respuesta = true;
		}catch (Exception e) {
			mensaje = "Cliente no eliminado";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
}
