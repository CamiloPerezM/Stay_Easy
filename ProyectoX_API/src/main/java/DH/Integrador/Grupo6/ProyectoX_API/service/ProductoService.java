package DH.Integrador.Grupo6.ProyectoX_API.service;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Ciudad;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Producto;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Reserva;
import DH.Integrador.Grupo6.ProyectoX_API.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
        return  productoRepository.findAll();
    }
    public Optional<Producto> buscarProducto(Long id){

        return productoRepository.findById(id);
    }

    public List<Producto> buscarPorCiudad(Optional<Ciudad> ciudad){

        return productoRepository.findByCiudad(ciudad);
    }

    /*public List<Producto> buscarPorFechas(LocalDate checkIn, LocalDate checkOut){
        System.out.println(checkIn);
        System.out.println(checkOut);
        return productoRepository.findByDate(checkIn,checkOut);
    }

     */
    public List<Producto> buscarPorFechasYCiudad(LocalDate checkIn, LocalDate checkOut, Long id){
        return productoRepository.findByDateAndCity(checkIn, checkOut, id);
    }



    // post

    public Producto guardarProducto(Producto producto){
        return  productoRepository.save(producto);
    }

    //put

    public  void actualizarProducto(Producto producto){
        productoRepository.save(producto);
    }

    //delete

    public void eliminarProducto(Long id){
        productoRepository.deleteById(id);
    }

    //public List<Producto> buscarCategoria(Long id) {
     //   return productoRepository.buscarCategoriaId(id);
    //}

}



