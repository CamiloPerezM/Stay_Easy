package DH.Integrador.Grupo6.ProyectoX_API.controller;


import DH.Integrador.Grupo6.ProyectoX_API.entity.Caracteristicas;
import DH.Integrador.Grupo6.ProyectoX_API.service.CaracteristicasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/caracteristicas")
@CrossOrigin(origins = "http://localhost:5173")
public class CaracteristicasController {

    private CaracteristicasService caracteristicasService;

    @Autowired
    public CaracteristicasController(CaracteristicasService caracteristicasService){
        this.caracteristicasService=caracteristicasService;
    }
    @GetMapping
    public ResponseEntity<List<Caracteristicas>> listCaracteristicas(){
        return ResponseEntity.ok(caracteristicasService.buscarCaracteristicas());
    }
    @GetMapping("/{id}")
    public  ResponseEntity<Caracteristicas> buscarCaracteristica(@PathVariable Long id) {
        Optional<Caracteristicas> caracteristicaBuscada = caracteristicasService.buscarCaracteristicas(id);
        if (caracteristicaBuscada.isPresent()) {
            return ResponseEntity.ok(caracteristicaBuscada.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping
    public ResponseEntity<Caracteristicas> registrarCaracteristica(@RequestBody Caracteristicas caracteristicas){
        return  ResponseEntity.ok(caracteristicasService.guardarCaracteristica(caracteristicas));
    }
    @PutMapping
    public ResponseEntity<String> actualizarCaracteristica(@RequestBody Caracteristicas caracteristicas) {
        Optional<Caracteristicas> caracteristicaBuscada=caracteristicasService.buscarCaracteristicas(caracteristicas.getId());
        if (caracteristicaBuscada.isPresent()) {
            caracteristicasService.actualizarCaracteristica(caracteristicas);
            return ResponseEntity.ok("Se actualizó la caracteristica con id= " + caracteristicas.getId());
        } else {
            return ResponseEntity.badRequest().body("No se pudo actualizar la caracteristica con id= " + caracteristicas.getId() +
                    " ya que no existe en la base de datos.");
        }
    }
    @DeleteMapping("/{id}")
    public  ResponseEntity<String> eliminarCaracteristica(@PathVariable Long id) {

        Optional<Caracteristicas> caracteristicaBuscada = caracteristicasService.buscarCaracteristicas(id);
        if (caracteristicaBuscada.isPresent()) {
            caracteristicasService.eliminarCaracteristica(id);
            return ResponseEntity.ok("Se eliminó la caracteristica con id = " + id);
        } else {
            return ResponseEntity.badRequest().body("No se puede eliminar la caracteristica con id =" + id +
                    "ya que no existe en la base de datos. ");
        }
    }

}
