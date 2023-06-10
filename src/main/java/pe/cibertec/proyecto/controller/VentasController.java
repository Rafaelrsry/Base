package pe.cibertec.proyecto.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Productos;
import pe.cibertec.proyecto.model.db.Ventas;
import pe.cibertec.proyecto.request.ClienteRequest;
import pe.cibertec.proyecto.request.VentaRequest;
import pe.cibertec.proyecto.response.ResultadoResponse;
import pe.cibertec.proyecto.service.ClienteService;
import pe.cibertec.proyecto.service.ProductoService;
import pe.cibertec.proyecto.service.VentaService;

@Controller
public class VentasController {

	@Autowired
	private ProductoService productoService;
	@Autowired
	private ClienteService clienteService;

	@Autowired
	private VentaService ventaService;
	
	@GetMapping("/ventas")
	public String listadoProduco(Model model) {
		model.addAttribute("listacliente", clienteService.listarClientes());
		model.addAttribute("listaproducto", productoService.listarProductos());
		return "ventas";
	}

	
	
	@GetMapping("/listarVentas")
	@ResponseBody
	public List<Ventas> listarVentas(){
		return ventaService.listarVentas();
	}
	
	

	
	@PostMapping("/register")
	@ResponseBody
	public ResponseEntity<String> updateventa(
			@RequestParam("idecliente") int idecliente,
	        @RequestParam("fecha") String fecha,
	        @RequestParam("idproducto") int idproducto,
	        @RequestParam("cantidad") int cantidad
	) {
	    ventaService.actProduct(idecliente, fecha, idproducto, cantidad);
	    
	    // Construir y devolver una respuesta adecuada
	    return new ResponseEntity<>("Registro exitoso", HttpStatus.OK);
	}
	
	
	
}
