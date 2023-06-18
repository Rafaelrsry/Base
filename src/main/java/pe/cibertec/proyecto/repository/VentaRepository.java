package pe.cibertec.proyecto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import pe.cibertec.proyecto.model.db.Encargos;
import pe.cibertec.proyecto.model.db.Ventas;

@Repository
public interface VentaRepository  extends JpaRepository<Ventas,Integer>{


	@Query("SELECT v FROM Ventas v JOIN v.cliente cl JOIN v.producto p JOIN v.encargo e WHERE v.vnt_fecha LIKE %?1%"
			+"OR cl.cli_nombres LIKE %?1% "
			+"OR cl.cli_apellidos LIKE %?1% "
			+"OR p.pdt_producto LIKE %?1% "
			+"OR e.codigoencargo LIKE %?1% "
			+"OR e.estadopedido.estado LIKE %?1% ")
	List<Ventas> busqueda(String busqueda);
}
