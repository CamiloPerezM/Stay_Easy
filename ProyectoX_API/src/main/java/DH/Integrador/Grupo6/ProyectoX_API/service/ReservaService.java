package DH.Integrador.Grupo6.ProyectoX_API.service;


import DH.Integrador.Grupo6.ProyectoX_API.entity.Ciudad;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Reserva;
import DH.Integrador.Grupo6.ProyectoX_API.repository.ReservasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {

    private ReservasRepository reservasRepository;

    @Autowired
    public ReservaService(ReservasRepository reservasRepository){
        this.reservasRepository = reservasRepository;
    }


    // get
    public List<Reserva> buscarReserva(){ return reservasRepository.findAll();}

    public Optional<Reserva> buscarReserva(Long id){
        return reservasRepository.findById(id);
    }

    //BuscarPorProducto
    //get
    public List<Reserva> buscarReservaPorProducto(Long id) { return reservasRepository.findByProductoId(id);}


    // post
    public Reserva guardarReserva (Reserva reserva){ return reservasRepository.save(reserva);}


    // put

    public void actualizarReserva(Reserva reserva){
        reservasRepository.save(reserva);
    }

    // delete

    public void eliminarReserva(Long id){reservasRepository.deleteById(id);}

}

