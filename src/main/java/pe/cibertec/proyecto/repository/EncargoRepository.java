package pe.cibertec.proyecto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.cibertec.proyecto.model.db.Encargos;

@Repository
public interface EncargoRepository extends JpaRepository<Encargos, Integer> {

	
	
}
