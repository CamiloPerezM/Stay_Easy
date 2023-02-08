package DH.Integrador.Grupo6.ProyectoX_API.service;


import DH.Integrador.Grupo6.ProyectoX_API.entity.Imagenes;
import DH.Integrador.Grupo6.ProyectoX_API.repository.ImagenesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ImagenesService {

    private ImagenesRepository imagenesRepository;

    @Autowired
    public  ImagenesService(ImagenesRepository imagenesRepository) {
        this.imagenesRepository = imagenesRepository;
    }

    // get
    public List<Imagenes> buscarImagenes(){
        return  imagenesRepository.findAll();
    }
    public Optional<Imagenes> buscarImagenes(Long id){
        return imagenesRepository.findById(id);
    }

    // post

    public Imagenes guardarImagen(Imagenes imagenes){
        return  imagenesRepository.save(imagenes);
    }

    //put

    public  void actualizarImagen(Imagenes imagenes){
        imagenesRepository.save(imagenes);
    }

    //delete

    public void eliminarImagen(Long id){
        imagenesRepository.deleteById(id);
    }

}
