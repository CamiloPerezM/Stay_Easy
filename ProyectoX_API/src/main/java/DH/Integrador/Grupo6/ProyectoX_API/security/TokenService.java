package DH.Integrador.Grupo6.ProyectoX_API.security;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Usuario;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Date;


@Service
public class TokenService {

    @Value("${api.jwt.expiration}")
    private String expiration;

    @Value("${api.jwt.secret}")
    private String secret;



    public String generarToken(Authentication authentication){
        Usuario registrado = (Usuario) authentication.getPrincipal();
        Date hoy = new Date();
        Date fechaVencimiento = new Date( hoy.getTime() + Integer.parseInt(expiration));

        return Jwts.builder()
                .setIssuer("API Digital Booking")
                .setSubject(registrado.getId().toString())
                .setIssuedAt(fechaVencimiento)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();

    }

    public boolean isTokenValido(String token){
        try {
            Jwts.parser().setSigningKey(this.secret).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public Long getIDusuario(String token){
        Claims claims = Jwts.parser().setSigningKey(this.secret).parseClaimsJws(token).getBody();
        return Long.parseLong(claims.getSubject());

    }



}
