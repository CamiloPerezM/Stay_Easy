package DH.Integrador.Grupo6.ProyectoX_API.repository;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Cliente;
import DH.Integrador.Grupo6.ProyectoX_API.service.ClienteService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {
}
