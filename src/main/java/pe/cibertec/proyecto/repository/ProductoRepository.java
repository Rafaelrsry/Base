package pe.cibertec.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.cibertec.proyecto.model.db.Productos;


@Repository
public interface ProductoRepository extends JpaRepository<Productos, Integer> {

	
	
}
