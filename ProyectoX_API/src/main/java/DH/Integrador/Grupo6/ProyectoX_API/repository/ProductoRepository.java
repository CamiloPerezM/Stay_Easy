package DH.Integrador.Grupo6.ProyectoX_API.repository;


import DH.Integrador.Grupo6.ProyectoX_API.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
