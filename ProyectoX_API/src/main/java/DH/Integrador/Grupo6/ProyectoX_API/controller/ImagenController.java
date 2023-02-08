package DH.Integrador.Grupo6.ProyectoX_API.controller;


import DH.Integrador.Grupo6.ProyectoX_API.entity.Imagenes;
import DH.Integrador.Grupo6.ProyectoX_API.service.ImagenesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/imagenes")
@CrossOrigin(origins = "http://localhost:5173")
public class ImagenController {

    private ImagenesService imagenesService;

    @Autowired

    public ImagenController (ImagenesService imagenesService){this.imagenesService = imagenesService;
    }

    @PostMapping
    public ResponseEntity<Imagenes> imagenesRegistrar(@RequestBody Imagenes imagenes) {
        return ResponseEntity.ok(imagenesService.guardarImagen(imagenes));
    }
    @GetMapping
    public ResponseEntity<List<Imagenes>> listaImagenes (){
        return  ResponseEntity.ok(imagenesService.buscarImagenes());
    }

    @GetMapping("/{id}")
    public  ResponseEntity<Imagenes> buscarImagenes(@PathVariable Long id) {
        Optional<Imagenes> imagenesBuscada = imagenesService.buscarImagenes(id);
        if (imagenesBuscada.isPresent()) {
            return ResponseEntity.ok(imagenesBuscada.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping
    public ResponseEntity<String> actualizarImagenes(@RequestBody Imagenes imagenes) {
        // verificamos que la Producto existe
        Optional<Imagenes> productoBuscada=imagenesService.buscarImagenes(imagenes.getId());
        if (productoBuscada.isPresent()) {
            imagenesService.actualizarImagen(imagenes);
            return ResponseEntity.ok("Se actualizó la imagen con id= " + imagenes.getId());
        } else {
            return ResponseEntity.badRequest().body("No se pudo actualizar la imagen con id= " + imagenes.getId() +
                    " ya que no existe en la base de datos.");
        }
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<String> eliminarImagen(@PathVariable Long id) {

        Optional<Imagenes> imagenesBuscada = imagenesService.buscarImagenes(id);
        if (imagenesBuscada.isPresent()) {
            imagenesService.eliminarImagen(id);
            return ResponseEntity.ok("Se eliminó la imagen con id = " + id);
        } else {
            return ResponseEntity.badRequest().body("No se puede eliminar la imagen con id =" + id +
                    "ya que no existe en la base de datos. ");
        }
    }
}


