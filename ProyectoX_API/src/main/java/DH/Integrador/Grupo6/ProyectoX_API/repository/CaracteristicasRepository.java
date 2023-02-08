package DH.Integrador.Grupo6.ProyectoX_API.repository;


import DH.Integrador.Grupo6.ProyectoX_API.entity.Caracteristicas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CaracteristicasRepository extends JpaRepository<Caracteristicas, Long> {
}
