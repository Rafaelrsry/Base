package pe.cibertec.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.cibertec.proyecto.model.db.Ventas;

@Repository
public interface VentaRepository  extends JpaRepository<Ventas,Integer>{

}
