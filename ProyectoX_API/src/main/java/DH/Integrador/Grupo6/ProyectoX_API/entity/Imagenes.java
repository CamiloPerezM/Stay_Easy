package DH.Integrador.Grupo6.ProyectoX_API.entity;


import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import javax.persistence.*;

@Entity
@Table(name = "imagenes")
public class Imagenes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private Long id;
    @Column
    private String urlImagen;

    @JsonIncludeProperties(value = {"id"})
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id")
    private Producto producto;

    public Imagenes(){

    }

    public Imagenes(String urlImagen, Producto producto) {
        this.urlImagen = urlImagen;
        this.producto = producto;
    }

    public Imagenes(Long id, String urlImagen, Producto producto) {
        this.id = id;
        this.urlImagen = urlImagen;
        this.producto = producto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}



