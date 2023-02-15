package DH.Integrador.Grupo6.ProyectoX_API.controller;


import DH.Integrador.Grupo6.ProyectoX_API.entity.Ciudad;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Reserva;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Usuario;
import DH.Integrador.Grupo6.ProyectoX_API.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reserva")
@CrossOrigin(origins = {"http://localhost:5173","http://127.0.0.1:5173/"})
public class ReservaController {

    private ReservaService reservaService;

    @Autowired
    public ReservaController(ReservaService reservaService){ this.reservaService = reservaService;}

    //get

    @GetMapping
    public ResponseEntity<List<Reserva>> listarReservas(){
        return ResponseEntity.ok(reservaService.buscarReserva());
    }

    @GetMapping("{id}")
    public ResponseEntity<Reserva> buscarReserva(@PathVariable Long id){
        Optional<Reserva> reservaBuscada = reservaService.buscarReserva(id);
        if (reservaBuscada.isPresent()){
            return ResponseEntity.ok(reservaBuscada.get());
        }
        else return  ResponseEntity.notFound().build();
    }

    @GetMapping("/producto/{productoId}")
    public ResponseEntity<List<Reserva>> buscarReservaPorProducto(@PathVariable Long id){
        List<Reserva> reservaBuscada= reservaService.buscarReservaPorProducto(id);
        if (reservaBuscada.isEmpty()){
            return ResponseEntity.ok(reservaBuscada);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

//Solo las peticiones con un token válido podrán crear nuevas reservas @PreAuthorize cumplir con el rol de usuario
    // Estatus 201 created
    @PostMapping("/registrar")
    public ResponseEntity<Reserva> crearReserva(@RequestBody Reserva reserva){
        return ResponseEntity.status(HttpStatus.CREATED).body(reservaService.guardarReserva(reserva));
    }



}
