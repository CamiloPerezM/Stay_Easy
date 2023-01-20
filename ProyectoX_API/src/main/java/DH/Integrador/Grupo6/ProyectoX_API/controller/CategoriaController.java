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
public class CategoriaController {

    private CategoriaService categoriaService;

    @Autowired
    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @GetMapping
    public ResponseEntity<List<Categoria>> listarCategorias(){
        return ResponseEntity.ok(categoriaService.buscarTodasCategoria());
    }

    @GetMapping("{id}")
    public ResponseEntity<Categoria> buscarCategoria(@PathVariable Long id){
        Optional<Categoria> categoriaBuscada=categoriaService.buscarCategoria(id);
        if (categoriaBuscada.isPresent()){
            return ResponseEntity.ok(categoriaBuscada.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Categoria> registrarCategoria(@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.guardarCategoria(categoria));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCategoria(@PathVariable Long id)  {
        categoriaService.eliminarCategoria(id);
        return ResponseEntity.ok("Se eliminó la categoria con id= "+id);
    }



}
