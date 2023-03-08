package DH.Integrador.Grupo6.ProyectoX_API.controller;

import DH.Integrador.Grupo6.ProyectoX_API.dto.UsuarioDTO;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Ciudad;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Usuario;
import DH.Integrador.Grupo6.ProyectoX_API.request.UsuarioLogin;
import DH.Integrador.Grupo6.ProyectoX_API.response.TokenResponse;
import DH.Integrador.Grupo6.ProyectoX_API.security.TokenService;
import DH.Integrador.Grupo6.ProyectoX_API.service.UsuarioService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UsuarioService usuarioService;


    // post

    @PostMapping("/registrar")
    public ResponseEntity<TokenResponse> registrarUsuario(@RequestBody @Valid Usuario usuario){
        UsuarioLogin usuarioLogin = new UsuarioLogin();
        usuarioLogin.setEmail(usuario.getEmail());
        usuarioLogin.setContrasenna(usuario.getContrasenna());

        usuarioService.guardarUsuario(usuario);

        UsernamePasswordAuthenticationToken datosLogin = usuarioLogin.converter();

        try {
            Authentication authentication = authenticationManager.authenticate(datosLogin);
            String token = tokenService.generarToken(authentication);
            Usuario usuario1= usuarioService.buscarUsuario(tokenService.getIDusuario(token));
            UsuarioDTO usuarioDTO = new UsuarioDTO();
            BeanUtils.copyProperties(usuario1, usuarioDTO);
            return ResponseEntity.ok(new TokenResponse(token, "Bearer", usuarioDTO));
        } catch (AuthenticationException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // get

    @GetMapping("{id}")
    public ResponseEntity<Usuario> buscarUsuario(@PathVariable Long id){

            return ResponseEntity.ok(usuarioService.buscarUsuario(id));

    }




}
