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

    // get

    public List<Categoria> buscarCategorias(){
        return categoriaRepository.findAll();
    }

    public Optional<Categoria> buscarCategoria(Long id){
        return categoriaRepository.findById(id);
    }

    // post

    public Categoria guardarCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    // put

    public void actualizarCategoria(Categoria categoria){
        categoriaRepository.save(categoria);
    }

    // delete

    public void eliminarCategoria(Long id){categoriaRepository.deleteById(id);}

}
