package DH.Integrador.Grupo6.ProyectoX_API.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "caracteristicas")
public class Caracteristicas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private Long id;

    @Column
    private Boolean nombre;

    public Caracteristicas(){

    }
    //Constructor

    public Caracteristicas(Boolean nombre) {
        this.nombre = nombre;
    }

    public Caracteristicas(Long id, Boolean nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getNombre() {
        return nombre;
    }

    public void setNombre(Boolean nombre) {
        this.nombre = nombre;
    }


}
