package DH.Integrador.Grupo6.ProyectoX_API.service;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Caracteristicas;
import DH.Integrador.Grupo6.ProyectoX_API.repository.CaracteristicasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CaracteristicasService {

    private CaracteristicasRepository caracteristicasRepository;

    @Autowired
    public  CaracteristicasService(CaracteristicasRepository caracteristicasRepository) {
        this.caracteristicasRepository = caracteristicasRepository;
    }

    // get
    public List<Caracteristicas> buscarCaracteristicas(){
        return  caracteristicasRepository.findAll();
    }
    public Optional<Caracteristicas> buscarCaracteristicas(Long id){
        return caracteristicasRepository.findById(id);
    }

    // post

    public Caracteristicas guardarCaracteristica(Caracteristicas caracteristicas ){
        return  caracteristicasRepository.save(caracteristicas);
    }

    //put

    public  void actualizarCaracteristica(Caracteristicas caracteristicas){
        caracteristicasRepository.save(caracteristicas);
    }

    //delete

    public void eliminarCaracteristica(Long id){
        caracteristicasRepository.deleteById(id);
    }

}
