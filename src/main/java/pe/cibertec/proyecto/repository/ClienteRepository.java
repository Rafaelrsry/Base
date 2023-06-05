package pe.cibertec.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.cibertec.proyecto.model.db.Clientes;

@Repository
public interface ClienteRepository  extends JpaRepository<Clientes, Integer>{

}
