package DH.Integrador.Grupo6.ProyectoX_API.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nombre;
    @Column
    private String contrasenna;

    public Usuario() {
    }

    public Usuario(String nombre, String contrasenna) {
        this.nombre = nombre;
        this.contrasenna = contrasenna;
    }

    public Usuario(Long id, String nombre, String contrasenna) {
        this.id = id;
        this.nombre = nombre;
        this.contrasenna = contrasenna;
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

    public String getContrasenna() {
        return contrasenna;
    }

    public void setContrasenna(String contrasenna) {
        this.contrasenna = contrasenna;
    }
}
