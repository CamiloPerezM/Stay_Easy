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
    private String descripcion;

    @Column
    private String idIcono;

    @ManyToMany(mappedBy = "caracteristicas", fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Producto> productos;

    public Caracteristicas() {

    }
    //Constructor


    public Caracteristicas(String descripcion, String idIcono, Set<Producto> productos) {
        this.descripcion = descripcion;
        this.idIcono = idIcono;
        this.productos = productos;
    }

    public Caracteristicas(Long id, String descripcion, String idIcono, Set<Producto> productos) {
        this.id = id;
        this.descripcion = descripcion;
        this.idIcono = idIcono;
        this.productos = productos;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getIdIcono() {
        return idIcono;
    }

    public void setIdIcono(String idIcono) {
        this.idIcono = idIcono;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
