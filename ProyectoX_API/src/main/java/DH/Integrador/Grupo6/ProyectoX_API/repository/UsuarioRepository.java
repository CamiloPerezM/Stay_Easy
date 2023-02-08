package DH.Integrador.Grupo6.ProyectoX_API.repository;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Usuario;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    List<Usuario> findByNombre(String nombre);


}
