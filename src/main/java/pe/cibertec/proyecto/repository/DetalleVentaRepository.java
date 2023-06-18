package pe.cibertec.proyecto.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pe.cibertec.proyecto.model.db.Clientes;
import pe.cibertec.proyecto.model.db.DetalleVentas;
import pe.cibertec.proyecto.model.db.Usuarios;
import pe.cibertec.proyecto.model.db.Ventas;

@Repository
public interface DetalleVentaRepository  extends JpaRepository<DetalleVentas, Integer>{


	@Query("SELECT dt FROM DetalleVentas dt JOIN dt.venta v JOIN dt.usuario u WHERE CAST(dt.iddetalles_ventas AS string) LIKE %?1%"
			 + "OR v.vnt_fecha LIKE %?1% "
			 + "OR v.vnt_valorventa LIKE %?1% "
			 + "OR v.producto.pdt_producto LIKE %?1% "
			 + "OR v.encargo.codigoencargo LIKE %?1% ")
	List<DetalleVentas> busqueda(String busqueda);
	
	@Transactional
	@Modifying
	@Query(
			value = "{call sp_registrarDetalle(:det_idusuario)}"
			, nativeQuery = true)
	void registrarDetallevent(@Param("det_idusuario") int det_idusuario);
	
	

}
