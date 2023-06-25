package pe.cibertec.proyecto.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import pe.cibertec.proyecto.model.db.TipoUsuario;
import pe.cibertec.proyecto.model.db.Usuarios;





@Service
public class UsuarioDetalleService implements UserDetailsService {

	
	@Autowired
	private UsuarioService usuarioService;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Usuarios usuario = 	usuarioService.buscarUsuarioPorNomusuario(username);	
		
		return usuarioPorAutenticacion(usuario,obtenerAutorizacionUsuario(usuario.getRoles()));
	}
	
	
	private UserDetails usuarioPorAutenticacion( Usuarios usuario, List<GrantedAuthority> authorityList) {
		
		return new User(usuario.getUsusuario(), usuario.getUspass(), usuario.getActivo(),
                true, true, true, authorityList);
	}


	private List<GrantedAuthority> 
	obtenerAutorizacionUsuario( Set<TipoUsuario> listRoles ){
		
	Set<GrantedAuthority> roles = new HashSet<GrantedAuthority>();
	
	for(TipoUsuario rol: listRoles) {
		roles.add(new SimpleGrantedAuthority(rol.getRolusuario()));
	}
	List<GrantedAuthority> grantedAuthorities = new ArrayList<>(roles);
	return grantedAuthorities;
	
	
}
	
}
