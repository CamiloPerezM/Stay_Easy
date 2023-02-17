package DH.Integrador.Grupo6.ProyectoX_API.service;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Usuario;
import DH.Integrador.Grupo6.ProyectoX_API.repository.RolRepository;
import DH.Integrador.Grupo6.ProyectoX_API.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private static final String ROL_STANDARD = "USER";

    @Autowired
    private UsuarioRepository usuarioRepository;

   @Autowired
    private RolRepository rolRepository;





    // post

    public Usuario guardarUsuario(Usuario usuario){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String contrasennaEncoder = encoder.encode(usuario.getContrasenna());

        usuario.setContrasenna(contrasennaEncoder);

        usuario.setRol(usuario.getRol() == null ? rolRepository.findByNombre(ROL_STANDARD) : rolRepository.findByNombre(usuario.getRol().getNombre()));

        return usuarioRepository.save(usuario);
    }

    // get



    public Usuario buscarUsuario(Long id){
        return usuarioRepository.findById(id).orElse(null);
    }



}
