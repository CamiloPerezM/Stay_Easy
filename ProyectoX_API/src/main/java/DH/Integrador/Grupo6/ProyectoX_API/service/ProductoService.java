package DH.Integrador.Grupo6.ProyectoX_API.service;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Producto;
import DH.Integrador.Grupo6.ProyectoX_API.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {


    private ProductoRepository productoRepository;

    @Autowired
    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    // get
    public List<Producto> buscarProducto() {
        Producto producto1 = new Producto(1l, "casa", "la super descripcion", "https://goo.gl/maps/puVstYWwsHMLAgLe8", true, 4.5);
        return new ArrayList<>(){{add(producto1);}};
        //return  productoRepository.findAll();
    }
    public Optional<Producto> buscarProducto(Long id){
        Producto producto1 = new Producto(1l, "casa", "la super descripcion", "https://goo.gl/maps/puVstYWwsHMLAgLe8", true, 4.5);
return Optional.of(producto1);
        //return productoRepository.findById(id);
    }

    // post

    public Producto guardarProducto(Producto producto){
        return producto;
        //return  productoRepository.save(producto);
    }

    //put

    public Producto actualizarProducto(Producto producto) {
        return producto;
    }
        //productoRepository.save(producto);


    //delete

    public Producto eliminarProducto(Long id){
        Producto producto1 = new Producto(1l, "casa", "la super descripcion", "https://goo.gl/maps/puVstYWwsHMLAgLe8", true, 4.5);
        return producto1 ;
        //productoRepository.deleteById(id);
    }

}
