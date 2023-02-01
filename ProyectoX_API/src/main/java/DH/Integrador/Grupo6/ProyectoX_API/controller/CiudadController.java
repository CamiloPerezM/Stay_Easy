package DH.Integrador.Grupo6.ProyectoX_API.controller;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Ciudad;
import DH.Integrador.Grupo6.ProyectoX_API.service.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ciudades")
@CrossOrigin(origins = "http://localhost:5173")
public class CiudadController {

    private CiudadService ciudadService;

    @Autowired
    public CiudadController(CiudadService ciudadService) {
        this.ciudadService = ciudadService;
    }

    // get
    @GetMapping
    public ResponseEntity<List<Ciudad>> listarCiudades(){
        return ResponseEntity.ok(ciudadService.buscarCiudades());
    }

    @GetMapping("{id}")
    public ResponseEntity<Ciudad> buscarCiudad(@PathVariable Long id){
        // verificamos que la ciudad existe
        Optional<Ciudad> ciudadBuscada=ciudadService.buscarCiudad(id);
        if (ciudadBuscada.isPresent()){
            return ResponseEntity.ok(ciudadBuscada.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    // post

    @PostMapping
    public ResponseEntity<Ciudad> registrarCiudad(@RequestBody Ciudad ciudad){
        return ResponseEntity.ok(ciudadService.guardarCiudad(ciudad));
    }

    // put
    @PutMapping
    public ResponseEntity<String> actualizarCiudad(@RequestBody Ciudad ciudad) {
        // verificamos que la ciudad existe
        Optional<Ciudad> ciudadBuscada=ciudadService.buscarCiudad(ciudad.getId());
        if (ciudadBuscada.isPresent()) {
            ciudadService.actualizarCiudad(ciudad);
            return ResponseEntity.ok("Se actualizó la ciudad con id= " + ciudad.getId());
        } else {
            return ResponseEntity.badRequest().body("No se pudo actualizar la ciudad con id= " + ciudad.getId() +
                    " ya que no existe en la base de datos.");
        }
    }

    // delete

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCiudad(@PathVariable Long id)  {
        // verificamos que la ciudad existe
        Optional<Ciudad> ciudadBuscada=ciudadService.buscarCiudad(id);
        if (ciudadBuscada.isPresent()) {
            ciudadService.eliminarCiudad(id);
            return ResponseEntity.ok("Se eliminó la ciudad con id= "+id);
        } else {
            return ResponseEntity.badRequest().body("No se puede eliminar ciudad con id =  " + id +
                    " ya que no existe en la base de datos.");
        }
    }

}
