package DH.Integrador.Grupo6.ProyectoX_API.controller;


import DH.Integrador.Grupo6.ProyectoX_API.entity.Imagenes;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Politicas;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Producto;
import DH.Integrador.Grupo6.ProyectoX_API.service.ImagenesService;
import DH.Integrador.Grupo6.ProyectoX_API.service.PoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/politicas")
@CrossOrigin(origins = "http://localhost:5173")
public class PoliticaController {


    private PoliticaService politicaService;

    @Autowired

    public PoliticaController (PoliticaService politicaService){this.politicaService = politicaService;
    }

    @PostMapping
    public ResponseEntity<Politicas> politicasRegistradas(@RequestBody Politicas politicas) {
        return ResponseEntity.ok(politicaService.guardarPoliticas(politicas));
    }
    @GetMapping
    public ResponseEntity<List<Politicas>> listaPoliticas (){
        return  ResponseEntity.ok(politicaService.buscarPoliticas());
    }


    @GetMapping("/{id}")
    public  ResponseEntity<Politicas> buscarPoliticas(@PathVariable Long id) {
        Optional<Politicas> politicaBuscada = politicaService.buscarPoliticas(id);
        if (politicaBuscada.isPresent()) {
            return ResponseEntity.ok(politicaBuscada.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<String> actualizarPolitica(@RequestBody Politicas politicas) {
        Optional<Politicas> politicaBuscada=politicaService.buscarPoliticas(politicas.getId());
        if (politicaBuscada.isPresent()) {
            politicaService.actualizarPoliticas(politicas);
            return ResponseEntity.ok("Se actualizó la politica con id= " + politicas.getId());
        } else {
            return ResponseEntity.badRequest().body("No se pudo actualizar la politica con id= " + politicas.getId() +
                    " ya que no existe en la base de datos.");
        }
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<String> eliminarPolitica(@PathVariable Long id) {

        Optional<Politicas> politicasBuscada = politicaService.buscarPoliticas(id);
        if (politicasBuscada.isPresent()) {
            politicaService.eliminarPoliticas(id);
            return ResponseEntity.ok("Se eliminó la politica con id = " + id);
        } else {
            return ResponseEntity.badRequest().body("No se puede eliminar la politica con id =" + id +
                    "ya que no existe en la base de datos. ");
        }
    }




}
