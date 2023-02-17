package DH.Integrador.Grupo6.ProyectoX_API.response;

import DH.Integrador.Grupo6.ProyectoX_API.dto.UsuarioDTO;

public class TokenResponse {

    private String token;

    private String tipo;

    private UsuarioDTO usuarioDTO;

    public TokenResponse() {
    }

    public TokenResponse(String token, String tipo, UsuarioDTO usuarioDTO) {
        this.token = token;
        this.tipo = tipo;
        this.usuarioDTO = usuarioDTO;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public UsuarioDTO getUsuarioDTO() {
        return usuarioDTO;
    }

    public void setUsuarioDTO(UsuarioDTO usuarioDTO) {
        this.usuarioDTO = usuarioDTO;
    }
}
