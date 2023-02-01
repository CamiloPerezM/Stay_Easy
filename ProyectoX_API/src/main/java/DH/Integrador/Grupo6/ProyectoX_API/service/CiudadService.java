package DH.Integrador.Grupo6.ProyectoX_API.service;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Categoria;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Ciudad;
import DH.Integrador.Grupo6.ProyectoX_API.repository.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CiudadService {

    private CiudadRepository ciudadRepository;

    @Autowired
    public CiudadService(CiudadRepository ciudadRepository) {
        this.ciudadRepository = ciudadRepository;
    }

    // get

    public List<Ciudad> buscarCiudades(){
        return ciudadRepository.findAll();
    }

    public Optional<Ciudad> buscarCiudad(Long id){
        return ciudadRepository.findById(id);
    }

    // post

    public Ciudad guardarCiudad(Ciudad ciudad){
        return ciudadRepository.save(ciudad);
    }

    // put

    public void actualizarCiudad(Ciudad ciudad){
        ciudadRepository.save(ciudad);
    }

    // delete

    public void eliminarCiudad(Long id){ciudadRepository.deleteById(id);}

}
