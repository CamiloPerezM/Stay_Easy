package DH.Integrador.Grupo6.ProyectoX_API.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reserva")
public class Reserva {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column
    private Long id;
    @Column
    private LocalTime horaReserva;
    @Column
    private LocalDate checkIn;
    @Column
    private LocalDate checkOut;

    @JsonIncludeProperties(value = {"id"})
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id")
    private Producto producto;

    /*
        @JsonIncludeProperties(value = "id")
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
     */


    public Reserva(){}

    public Reserva(LocalTime horaReserva, LocalDate checkIn, LocalDate checkOut, Producto producto, Usuario usuario) {
        this.horaReserva = horaReserva;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.producto = producto;
        /*this.usuario = usuario;*/
    }

    public Reserva(Long id, LocalTime horaReserva, LocalDate checkIn, LocalDate checkOut, Producto producto, Usuario usuario) {
        this.id = id;
        this.horaReserva = horaReserva;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.producto = producto;
       /* this.usuario = usuario;*/
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalTime getHoraReserva() {
        return horaReserva;
    }

    public void setHoraReserva(LocalTime horaReserva) {
        this.horaReserva = horaReserva;
    }

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(LocalDate checkIn) {
        this.checkIn = checkIn;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(LocalDate checkOut) {
        this.checkOut = checkOut;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
   /* public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    } */
}
