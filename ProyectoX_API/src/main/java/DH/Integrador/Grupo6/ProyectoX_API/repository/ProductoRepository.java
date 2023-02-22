package DH.Integrador.Grupo6.ProyectoX_API.repository;


import DH.Integrador.Grupo6.ProyectoX_API.entity.Ciudad;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Producto;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

   // List<Producto> buscarCategoriaId(Long categoria_id);


    @Query(
            value = "select * from productos p " +
                    "where p.id not in" +
                    "(" +
                    "select distinct r.producto_id " +
                    "from reserva r where r.check_in between :checkIn and :checkOut " +
                    "or r.check_out between :checkIn and :checkOut)", nativeQuery = true
    )
    List<Producto> findByDate(@Param("checkIn") LocalDate checkIn, @Param("checkOut") LocalDate checkOut);

    @Query(
            value = "select * from productos p " +
                    "where p.ciudad_id = :ciudadId "+
                    "and p.id not in" +
                    "(" +
                    "select distinct r.producto_id " +
                    "from reserva r where r.check_in between :checkIn and :checkOut " +
                    "or r.check_out between :checkIn and :checkOut)", nativeQuery = true
    )
    List<Producto> findByDateAndCity(@Param("checkIn") LocalDate checkIn, @Param("checkOut") LocalDate checkOut, @Param("ciudadId") Long id);

    List<Producto> findByCiudad(Optional<Ciudad> ciudad);

}
