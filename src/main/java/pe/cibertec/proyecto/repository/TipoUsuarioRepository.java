package pe.cibertec.proyecto.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import pe.cibertec.proyecto.model.db.TipoUsuario;
import pe.cibertec.proyecto.service.TipoUsuarioService;


@Repository
public interface TipoUsuarioRepository extends JpaRepository<TipoUsuario, Integer>{

	TipoUsuario findByrolusuario(String rolname);

}
