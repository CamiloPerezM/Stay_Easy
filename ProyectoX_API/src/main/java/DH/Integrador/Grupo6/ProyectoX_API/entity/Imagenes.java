package DH.Integrador.Grupo6.ProyectoX_API.entity;


import javax.persistence.*;

@Entity
@Table(name = "imagenes")
public class Imagenes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private Long id;

    @Column
    private String titulo;

    @Column
    private String URL;



    public Imagenes() {
    }
    public Imagenes(String titulo, String URL) {
        this.titulo = titulo;
        this.URL = URL;
    }

    public Imagenes(Long id, String titulo, String URL) {
        this.id = id;
        this.titulo = titulo;
        this.URL = URL;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }
}
