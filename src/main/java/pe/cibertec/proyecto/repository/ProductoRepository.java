package pe.cibertec.proyecto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import pe.cibertec.proyecto.model.db.Productos;


@Repository
public interface ProductoRepository extends JpaRepository<Productos, Integer> {

	@Query("SELECT p FROM Productos p WHERE p.pdt_producto LIKE %?1%"
			+"OR p.pdt_precioporcion LIKE %?1%"
			+"OR p.pdt_preciocompleta LIKE %?1%")
	List<Productos> buscarPorNombre(String nombre);

}
