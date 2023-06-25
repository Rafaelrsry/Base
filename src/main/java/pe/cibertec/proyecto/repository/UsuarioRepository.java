package pe.cibertec.proyecto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import pe.cibertec.proyecto.model.db.Usuarios;




@Repository
public interface UsuarioRepository extends JpaRepository<Usuarios, Integer>{
	
	
   
    Usuarios findByususuario(String username);
    
    

	@Query("SELECT u FROM Usuarios u WHERE u.ususuario LIKE %?1% "
            + "OR u.us_nombres LIKE %?1% "
            + "OR u.us_apellidos LIKE %?1%")
	List<Usuarios> busqueda(String busqueda);
	
	
	
}
