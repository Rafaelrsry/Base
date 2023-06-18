package pe.cibertec.proyecto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.cibertec.proyecto.model.db.Clientes;

@Repository
public interface ClienteRepository  extends JpaRepository<Clientes, Integer>{

	
	  @Query("SELECT cl FROM Clientes cl WHERE cl.cli_nombres LIKE %?1% "
	            + "OR cl.cli_apellidos LIKE %?1% "
	            + "OR cl.cli_dni LIKE %?1%")
	List<Clientes> busqueda(String busqueda);
}
