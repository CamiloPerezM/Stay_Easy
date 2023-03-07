package DH.Integrador.Grupo6.ProyectoX_API.controller;

import DH.Integrador.Grupo6.ProyectoX_API.dto.UsuarioDTO;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Usuario;
import DH.Integrador.Grupo6.ProyectoX_API.request.UsuarioLogin;
import DH.Integrador.Grupo6.ProyectoX_API.response.TokenResponse;
import DH.Integrador.Grupo6.ProyectoX_API.security.TokenService;
import DH.Integrador.Grupo6.ProyectoX_API.service.UsuarioService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AutenticacionController {


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UsuarioService usuarioService;


    @PostMapping
    public ResponseEntity<TokenResponse> autenticar(@RequestBody UsuarioLogin usuarioLogin) {
        System.out.println(usuarioLogin);
        System.out.println(usuarioLogin.getContrasenna());
        System.out.println(usuarioLogin.getEmail());
        UsernamePasswordAuthenticationToken datosLogin = usuarioLogin.converter();

        try {
            Authentication authentication = authenticationManager.authenticate(datosLogin);
            String token = tokenService.generarToken(authentication);
            Usuario usuario = usuarioService.buscarUsuario(tokenService.getIDusuario(token));
            UsuarioDTO usuarioDTO = new UsuarioDTO();
            BeanUtils.copyProperties(usuario, usuarioDTO);
            return ResponseEntity.ok(new TokenResponse(token, "Bearer", usuarioDTO));
        } catch (AuthenticationException e) {
            return ResponseEntity.badRequest().build();
        }
    }











}
