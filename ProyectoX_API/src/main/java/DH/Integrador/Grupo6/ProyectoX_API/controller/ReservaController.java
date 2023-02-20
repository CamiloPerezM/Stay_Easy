package DH.Integrador.Grupo6.ProyectoX_API.controller;


import DH.Integrador.Grupo6.ProyectoX_API.Exceptions.BadRequest;
import DH.Integrador.Grupo6.ProyectoX_API.dto.ReservaDTO;
import DH.Integrador.Grupo6.ProyectoX_API.entity.*;
import DH.Integrador.Grupo6.ProyectoX_API.service.ProductoService;
import DH.Integrador.Grupo6.ProyectoX_API.service.ReservaService;
import DH.Integrador.Grupo6.ProyectoX_API.service.UsuarioService;
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


    @Autowired
    private ReservaService reservaService;


    @Autowired
    private ProductoService productoService;
    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    public ReservaController(ReservaService reservaService){ this.reservaService = reservaService;}

    @GetMapping("/{id}")
    public  ResponseEntity<Reserva> buscarReserva(@PathVariable Long id) {
        Optional<Reserva> reservaBuscada = reservaService.buscarReserva(id);
        if (reservaBuscada.isPresent()) {
            return ResponseEntity.ok(reservaBuscada.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //get


    @GetMapping
    public ResponseEntity<List<Reserva>> listarReservas(){
        return ResponseEntity.ok(reservaService.buscarReserva());
    }

    //getReservaPorProducto

    @GetMapping("producto/{id}")
    public ResponseEntity<List<Reserva>> buscarReservaPorProducto(@PathVariable Long id){
        Optional<Producto> productoBuscado = productoService.buscarProducto(id);
        if (productoBuscado.isPresent()){
            List<Reserva> reservaBuscada = reservaService.buscarReservaPorProducto(id);
            if (!reservaBuscada.isEmpty()){
                return ResponseEntity.ok(reservaBuscada);
            }
            else {
                return ResponseEntity.notFound().build();
            }
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }




  /*  @GetMapping("/producto/{productoId}")
    public ResponseEntity<List<Reserva>> buscarReservaPorProducto(@RequestBody Long id){
        List<Reserva> reservaBuscada= reservaService.buscarReservaPorProducto(id);
        if (reservaBuscada.isEmpty()){
            return ResponseEntity.ok(reservaBuscada);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

   */


    //Solo las peticiones con un token válido podrán crear nuevas reservas @PreAuthorize cumplir con el rol de usuario
    // Estatus 201 created
    @PostMapping("/registrar")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public ReservaDTO crearReserva(@RequestBody ReservaDTO reservaDTO) throws BadRequest {
        Reserva reserva = convertToEntity(reservaDTO);
        Reserva crearReserva = reservaService.guardarReserva(reserva);
        return convertToDto(crearReserva);
    }
    private ReservaDTO convertToDto(Reserva reserva) {
        ReservaDTO reservaDTO = new ReservaDTO();
        reservaDTO.setId(reserva.getId());
        reservaDTO.setCheckIn(reserva.getCheckIn());
        reservaDTO.setCheckOut(reserva.getCheckOut());
        reservaDTO.setHoraReserva(reserva.getHoraReserva());
        reservaDTO.setUsuario(reserva.getUsuario().getId());
        reservaDTO.setProducto(reserva.getProducto().getId());
        return reservaDTO;
    }
    private Reserva convertToEntity(ReservaDTO reservaDto) throws BadRequest {
        Reserva reserva = new Reserva();
        reserva.setId(reservaDto.getId());
        reserva.setHoraReserva(reservaDto.getHoraReserva());
        reserva.setCheckIn(reservaDto.getCheckIn());
        reserva.setCheckOut(reservaDto.getCheckOut());
        Optional<Producto> producto = productoService.buscarProducto(reservaDto.getProducto());
        if (producto.isEmpty()) {
            throw new BadRequest("El producto con id = " + reservaDto.getProducto() + " no existe");
        }
        reserva.setProducto(producto.get());
        Usuario usuario = usuarioService.buscarUsuario(reservaDto.getUsuario());
        if (usuario == null){
            throw  new BadRequest("el usuario con id = " + reservaDto.getProducto() + "no existe");
        }
        reserva.setUsuario(usuario);
        return reserva;
    }


}

