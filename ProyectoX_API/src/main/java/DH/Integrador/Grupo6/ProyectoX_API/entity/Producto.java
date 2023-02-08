package DH.Integrador.Grupo6.ProyectoX_API.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "productos", schema = "PI_db_GRUPO6")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private Long id;
    @Column
    private String nombre;

    @Column
    private Double puntaje;

    @Column
    private String tituloDescripcion;

    @Column
    private String contenidoDescripcion;

    @Column
    private String ubicacionMaps;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "atributos",
            joinColumns = @JoinColumn(name = "productos_id"),
            inverseJoinColumns = @JoinColumn(name = "caracteristicas_id")
    )
    private Set<Caracteristicas> caracteristicas = new HashSet<>();

    @OneToMany(mappedBy = "producto", fetch = FetchType.EAGER)
    private Set<Imagenes> imagenes = new HashSet<>();

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "ciudad_id", nullable = false)
    private Ciudad ciudad;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    public Producto() {

    }

    public Producto(String nombre, Double puntaje, String tituloDescripcion, String contenidoDescripcion, String ubicacionMaps, Set<Caracteristicas> caracteristicas, Set<Imagenes> imagenes, Ciudad ciudad, Categoria categoria) {
        this.nombre = nombre;
        this.puntaje = puntaje;
        this.tituloDescripcion = tituloDescripcion;
        this.contenidoDescripcion = contenidoDescripcion;
        this.ubicacionMaps = ubicacionMaps;
        this.caracteristicas = caracteristicas;
        this.imagenes = imagenes;
        this.ciudad = ciudad;
        this.categoria = categoria;
    }

    public Producto(Long id, String nombre, Double puntaje, String tituloDescripcion, String contenidoDescripcion, String ubicacionMaps, Set<Caracteristicas> caracteristicas, Set<Imagenes> imagenes, Ciudad ciudad, Categoria categoria) {
        this.id = id;
        this.nombre = nombre;
        this.puntaje = puntaje;
        this.tituloDescripcion = tituloDescripcion;
        this.contenidoDescripcion = contenidoDescripcion;
        this.ubicacionMaps = ubicacionMaps;
        this.caracteristicas = caracteristicas;
        this.imagenes = imagenes;
        this.ciudad = ciudad;
        this.categoria = categoria;
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

    public Double getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(Double puntaje) {
        this.puntaje = puntaje;
    }

    public String getTituloDescripcion() {
        return tituloDescripcion;
    }

    public void setTituloDescripcion(String tituloDescripcion) {
        this.tituloDescripcion = tituloDescripcion;
    }

    public String getContenidoDescripcion() {
        return contenidoDescripcion;
    }

    public void setContenidoDescripcion(String contenidoDescripcion) {
        this.contenidoDescripcion = contenidoDescripcion;
    }

    public String getUbicacionMaps() {
        return ubicacionMaps;
    }

    public void setUbicacionMaps(String ubicacionMaps) {
        this.ubicacionMaps = ubicacionMaps;
    }

    public Set<Caracteristicas> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Set<Caracteristicas> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Set<Imagenes> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagenes> imagenes) {
        this.imagenes = imagenes;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}