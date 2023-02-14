package DH.Integrador.Grupo6.ProyectoX_API.repository;


import DH.Integrador.Grupo6.ProyectoX_API.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservasRepository  extends JpaRepository<Reserva, Long> {

    List<Reserva> findByProductoId(Long producto_id);
}
