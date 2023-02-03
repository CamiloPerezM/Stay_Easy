package DH.Integrador.Grupo6.ProyectoX_API.controller;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Categoria;
import DH.Integrador.Grupo6.ProyectoX_API.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = {"http://localhost:5173","http://127.0.0.1:5173/"})
public class CategoriaController {

    private CategoriaService categoriaService;

    @Autowired
    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    // get
    @GetMapping
    public ResponseEntity<List<Categoria>> listarCategorias(){
        return ResponseEntity.ok(categoriaService.buscarCategorias());
    }

    @GetMapping("{id}")
    public ResponseEntity<Categoria> buscarCategoria(@PathVariable Long id){
        // verificamos que la categoria existe
        Optional<Categoria> categoriaBuscada=categoriaService.buscarCategoria(id);
        if (categoriaBuscada.isPresent()){
            return ResponseEntity.ok(categoriaBuscada.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    // post

    @PostMapping
    public ResponseEntity<Categoria> registrarCategoria(@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.guardarCategoria(categoria));
    }

    // put
    @PutMapping
    public ResponseEntity<String> actualizarCategoria(@RequestBody Categoria categoria) {
        // verificamos que la categoria existe
        Optional<Categoria> categoriaBuscada=categoriaService.buscarCategoria(categoria.getId());
        if (categoriaBuscada.isPresent()) {
            categoriaService.actualizarCategoria(categoria);
            return ResponseEntity.ok("Se actualizó la categoria con id= " + categoria.getId());
        } else {
            return ResponseEntity.badRequest().body("No se pudo actualizar la categoria con id= " + categoria.getId() +
                    " ya que no existe en la base de datos.");
        }
    }

    // delete

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCategoria(@PathVariable Long id)  {
        // verificamos que la categoria existe
        Optional<Categoria> categoriaBuscada=categoriaService.buscarCategoria(id);
        if (categoriaBuscada.isPresent()) {
            categoriaService.eliminarCategoria(id);
            return ResponseEntity.ok("Se eliminó la categoria con id= "+id);
        } else {
            return ResponseEntity.badRequest().body("No se puede eliminar categoria con id =  " + id +
                    " ya que no existe en la base de datos.");
        }
    }



}
