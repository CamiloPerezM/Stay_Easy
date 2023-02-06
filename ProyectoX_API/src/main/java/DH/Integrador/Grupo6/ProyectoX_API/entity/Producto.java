package DH.Integrador.Grupo6.ProyectoX_API.entity;


import javax.persistence.*;

@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)

    @Column
    private  Long id;

    @Column
    private  String nombre;

    @Column
    private String descripcion;

    @Column
    private String ubicacion;

    @Column
    private Boolean disponiblilidad;

    @Column
    private Double puntaje;

    //Constructor


    public Producto() {
    }

    public Producto(String nombre, String descripcion, String ubicacion, Boolean disponiblilidad, Double puntaje) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.disponiblilidad = disponiblilidad;
        this.puntaje = puntaje;
    }

    public Producto(Long id, String nombre, String descripcion, String ubicacion, Boolean disponiblilidad, Double puntaje) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.disponiblilidad = disponiblilidad;
        this.puntaje = puntaje;
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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Boolean getDisponiblilidad() {
        return disponiblilidad;
    }

    public void setDisponiblilidad(Boolean disponiblilidad) {
        this.disponiblilidad = disponiblilidad;
    }

    public Double getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(Double puntaje) {
        this.puntaje = puntaje;
    }
}
