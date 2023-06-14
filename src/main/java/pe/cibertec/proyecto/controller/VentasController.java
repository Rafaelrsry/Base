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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.Encargos;
import pe.cibertec.proyecto.model.db.Productos;
import pe.cibertec.proyecto.model.db.Ventas;
import pe.cibertec.proyecto.request.ClienteRequest;
import pe.cibertec.proyecto.request.EncargoRequest;
import pe.cibertec.proyecto.request.ProductoRequest;
import pe.cibertec.proyecto.request.VentaRequest;
import pe.cibertec.proyecto.response.ResultadoResponse;
import pe.cibertec.proyecto.service.ClienteService;
import pe.cibertec.proyecto.service.EncargoService;
import pe.cibertec.proyecto.service.ProductoService;
import pe.cibertec.proyecto.service.VentaService;

@Controller
@RequestMapping("/appventas")
public class VentasController {

	@Autowired
	private ProductoService productoService;
	@Autowired
	private ClienteService clienteService;

	@Autowired
	private VentaService ventaService;
	@Autowired
	private EncargoService encargoService;

	
	
	@GetMapping("/listarVentas")
	@ResponseBody
	public List<Ventas> listarVentas(){
		return ventaService.listarVentas();
	}
	
	
	
	@PostMapping("/registrarVenta")
	@ResponseBody
	public ResultadoResponse registrarVenta(@RequestBody List<VentaRequest> ventaRequests) {
	    String mensaje = "Actualizacion Exitosa";
	    boolean respuesta = true;

	    try {
	        for (VentaRequest ventaRequest : ventaRequests) {
	            Ventas objventas = new Ventas();
	            Productos objprod = new Productos();
	            Clientes objcliente= new Clientes();
	            Encargos objencargo = new Encargos();
	            
	            if (ventaRequest.getId_ventas() == 0) {
	                objventas.setId_ventas(ventaRequest.getId_ventas());
	            }
	            objcliente.setId_clientes(ventaRequest.getVnt_idclientes());
	            
	       
	            objventas.setVnt_fecha(ventaRequest.getVnt_fecha());
	            objprod.setId_producto(ventaRequest.getVnt_idproducto());
	           objencargo.setCodigoencargo(ventaRequest.getVnt_codigoventa());
	           
	            objventas.setCliente(objcliente);
	            objventas.setProducto(objprod);
	            objventas.setEncargo(objencargo);
	    
	            objventas.setEncargo(objencargo);
	            objventas.setVnt_cantidad(ventaRequest.getVnt_cantidad());
	           
	            
	         
	            ventaService.registrarVenta(objventas);
	          
	         
	            
	        }
	    } catch (Exception ex) {
	        mensaje = "No se realizaron modificaciones";
	        respuesta = false;
	    }

	    return ResultadoResponse.builder()
	            .mensaje(mensaje)
	            .respuesta(respuesta)
	            .build();
	}

	
	
	


	
}
