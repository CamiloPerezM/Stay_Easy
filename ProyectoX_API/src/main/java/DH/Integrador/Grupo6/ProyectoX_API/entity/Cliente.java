package DH.Integrador.Grupo6.ProyectoX_API.entity;

import javax.persistence.Entity;

@Entity
public class Cliente extends Usuario{
    private Long ciudad_id;


    public Cliente() {
    }

    public Cliente(String nombre, String apellido, String email, String contrasenna, String ciudad, Rol rol, Long ciudad_id) {
        super(nombre, apellido, email, contrasenna, ciudad, rol);
        this.ciudad_id = ciudad_id;
    }

    public Cliente(Long id, String nombre, String apellido, String email, String contrasenna, String ciudad, Rol rol, Long ciudad_id) {
        super(id, nombre, apellido, email, contrasenna, ciudad, rol);
        this.ciudad_id = ciudad_id;
    }

    public Long getCiudad_id() {
        return ciudad_id;
    }

    public void setCiudad_id(Long ciudad_id) {
        this.ciudad_id = ciudad_id;
    }
}
