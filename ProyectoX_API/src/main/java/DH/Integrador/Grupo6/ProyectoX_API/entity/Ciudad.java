package DH.Integrador.Grupo6.ProyectoX_API.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="ciudades")
public class Ciudad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String nombre;
    @Column
    private String pais;

    @OneToMany(mappedBy = "ciudad", fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Producto> productos = new HashSet<>();

    //Constructor

    public Ciudad() {
    }

    public Ciudad(String nombre, String pais, Set<Producto> productos) {
        this.nombre = nombre;
        this.pais = pais;
        this.productos = productos;
    }

    public Ciudad(Long id, String nombre, String pais, Set<Producto> productos) {
        this.id = id;
        this.nombre = nombre;
        this.pais = pais;
        this.productos = productos;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}