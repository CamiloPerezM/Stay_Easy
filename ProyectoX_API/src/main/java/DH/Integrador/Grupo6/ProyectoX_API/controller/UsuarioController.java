package DH.Integrador.Grupo6.ProyectoX_API.controller;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Ciudad;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Usuario;
import DH.Integrador.Grupo6.ProyectoX_API.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = {"http://localhost:5173","http://127.0.0.1:5173/"})
public class UsuarioController {

    private UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    // get
    @GetMapping
    public ResponseEntity<List<Usuario>> listarUsuarios(){
        return ResponseEntity.ok(usuarioService.buscarusUarios());
    }

    @GetMapping("{id}")
    public ResponseEntity<Usuario> buscarUsuario(@PathVariable Long id){
        // verificamos que el usuario existe
        Optional<Usuario> usuarioBuscado=usuarioService.buscarUsuario(id);
        if (usuarioBuscado.isPresent()){
            return ResponseEntity.ok(usuarioBuscado.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/buscar/nombre/{nombre}")
    public ResponseEntity<Usuario> buscarUsuarioPorNombre(@PathVariable String nombre){
        Optional<Usuario> usuarioBuscado= usuarioService.buscarUsuarioPorNombre(nombre);
        if (usuarioBuscado.isPresent()){
            return ResponseEntity.ok(usuarioBuscado.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }


    // post

    @PostMapping
    public ResponseEntity<Usuario> registrarUsuario(@RequestBody Usuario usuario){
        return ResponseEntity.ok(usuarioService.guardarUsuario(usuario));
    }

}
