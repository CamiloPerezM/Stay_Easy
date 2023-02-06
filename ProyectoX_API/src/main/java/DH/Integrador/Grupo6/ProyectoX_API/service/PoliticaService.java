package DH.Integrador.Grupo6.ProyectoX_API.service;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Imagenes;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Politicas;
import DH.Integrador.Grupo6.ProyectoX_API.repository.ImagenesRepository;
import DH.Integrador.Grupo6.ProyectoX_API.repository.PoliticaRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class PoliticaService {


    private PoliticaRepository politicaRepository;

    @Autowired
    public  PoliticaService(PoliticaRepository politicaRepository) {
        this.politicaRepository = politicaRepository;
    }

    // get
    public List<Politicas> buscarPoliticas(){
        return  politicaRepository.findAll();
    }
    public Optional<Politicas> buscarPoliticas(Long id){
        return politicaRepository.findById(id);
    }

    // post

    public Politicas guardarPoliticas(Politicas politicas){
        return  politicaRepository.save(politicas);
    }

    //put

    public  void actualizarPoliticas(Politicas politicas){
        politicaRepository.save(politicas);
    }

    //delete

    public void eliminarPoliticas(Long id){
        politicaRepository.deleteById(id);
    }

}

}
