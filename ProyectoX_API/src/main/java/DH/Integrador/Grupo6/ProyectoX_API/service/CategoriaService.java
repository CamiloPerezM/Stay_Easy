package DH.Integrador.Grupo6.ProyectoX_API.service;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Categoria;
import DH.Integrador.Grupo6.ProyectoX_API.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    private CategoriaRepository categoriaRepository;

    @Autowired
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }


    public List<Categoria> buscarTodasCategoria(){
        return categoriaRepository.findAll();
    }

    public Optional<Categoria> buscarCategoria(Long id){
        return categoriaRepository.findById(id);
    }

    public Categoria guardarCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    public void actualizarCategoria(Categoria categoria){
        categoriaRepository.save(categoria);
    }

    public void eliminarCategoria(Long id){
        Optional<Categoria> categoriaAEliminar = buscarCategoria(id);
        if(categoriaAEliminar.isPresent() ){
            categoriaRepository.deleteById(id);
        }

    }

}
