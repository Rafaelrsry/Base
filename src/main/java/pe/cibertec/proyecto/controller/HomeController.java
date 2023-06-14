package pe.cibertec.proyecto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.cibertec.proyecto.model.db.Productos;
import pe.cibertec.proyecto.service.ClienteService;
import pe.cibertec.proyecto.service.EncargoService;
import pe.cibertec.proyecto.service.EstadoPedidoService;
import pe.cibertec.proyecto.service.ProductoService;
import pe.cibertec.proyecto.service.TipoUsuarioService;
import pe.cibertec.proyecto.service.UsuarioService;
import pe.cibertec.proyecto.service.VentaService;

@Controller
public class HomeController {

	
	
	@Autowired
	private ClienteService clienteService;
	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private ProductoService productoService;
	@Autowired
	private TipoUsuarioService tipousuarioService;
	
	@Autowired
	private EncargoService encargoService;
	
	@Autowired
	private EstadoPedidoService estadopedidoService;
	
	
	@GetMapping({"/inicio","/","/home","/index"})
	public String listadoTotal(Model model) {
		model.addAttribute("listacliente", clienteService.listarClientes());
		model.addAttribute("listausuario", usuarioService.listarUsuario());
		model.addAttribute("listaproducto", productoService.listarProductos());
		model.addAttribute("listatipouser", tipousuarioService.listarUsuarios());
		
		return "inicio";
	}

	@Autowired
	private VentaService ventaService;
	
	@GetMapping("/ventas")
	public String listadoProduco(Model model) {
		model.addAttribute("listacliente", clienteService.listarClientes());
		model.addAttribute("listaproducto", productoService.listarProductos());
		model.addAttribute("listarestadopedido", estadopedidoService.listarEstadopedido());
		return "ventas";
	
	}
}
