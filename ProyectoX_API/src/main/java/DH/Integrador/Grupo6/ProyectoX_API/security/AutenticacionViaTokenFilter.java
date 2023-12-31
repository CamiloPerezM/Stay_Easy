package DH.Integrador.Grupo6.ProyectoX_API.security;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Usuario;
import DH.Integrador.Grupo6.ProyectoX_API.repository.UsuarioRepository;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AutenticacionViaTokenFilter extends OncePerRequestFilter {

private TokenService tokenService;

private UsuarioRepository usuarioRepository;

    public AutenticacionViaTokenFilter(TokenService tokenService, UsuarioRepository usuarioRepository) {
        this.tokenService = tokenService;
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
       String token = recuperarToken(request);
       boolean valido = tokenService.isTokenValido(token);
        if(valido) {
            autenticarCliente(token);
        }

        filterChain.doFilter(request, response);

    }


    private void autenticarCliente(String token){
        Long idusuario = tokenService.getIDusuario(token);
        Usuario usuario = usuarioRepository.findById(idusuario).get();
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(usuario,null,usuario.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    private String recuperarToken(HttpServletRequest request){
        String token = request.getHeader("Authorization");
        if (token == null || token.isEmpty() || !token.startsWith("Bearer ")){
            return null;
        }

        return token.substring(7, token.length());

    }














}
