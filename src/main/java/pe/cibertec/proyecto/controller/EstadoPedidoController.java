package pe.cibertec.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.EstadoPedido;
import pe.cibertec.proyecto.service.EstadoPedidoService;

@Controller
@RequestMapping("/estadopedido")
public class EstadoPedidoController {

	
	@Autowired
	private EstadoPedidoService estadopedidoService;
	
	@GetMapping("/listarEstadoPedido")
	@ResponseBody
	public List<EstadoPedido> listarEstadoPedido(){
		return estadopedidoService.listarEstadopedido();
	}
}
