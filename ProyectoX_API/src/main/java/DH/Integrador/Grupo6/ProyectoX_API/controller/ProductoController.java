package DH.Integrador.Grupo6.ProyectoX_API.controller;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Ciudad;
import DH.Integrador.Grupo6.ProyectoX_API.entity.Producto;
import DH.Integrador.Grupo6.ProyectoX_API.service.CiudadService;
import DH.Integrador.Grupo6.ProyectoX_API.service.ProductoService;
import DH.Integrador.Grupo6.ProyectoX_API.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/producto")
@CrossOrigin(origins = {"http://localhost:5173","http://127.0.0.1:5173/"})
public class ProductoController {


    private CiudadService ciudadService;

    private ProductoService productoService;

    private ReservaService reservaService;

    @Autowired
    public ProductoController(CiudadService ciudadService, ProductoService productoService,ReservaService reservaService ) {
        this.ciudadService = ciudadService;
        this.productoService = productoService;
        this.reservaService = reservaService;
    }

    @GetMapping
    public ResponseEntity<List<Producto>> listProductos (@RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkIn ,
                                                         @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkOut) {

            return  ResponseEntity.ok(productoService.buscarPorFechas(checkIn, checkOut));
        }

    @GetMapping("fech/")
    public ResponseEntity<List<Producto>> listProductosFecha (@RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkIn ,
                                                         @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkOut) {

        return  ResponseEntity.ok(productoService.buscarPorFechas(checkIn, checkOut));
    }





    @GetMapping("fecha/ciudad/{id}")
    public ResponseEntity<List<Producto>> buscarPoriductoPorFechaYciudad(
                @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkIn,
                @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkOut,
                @PathVariable Long id){
        return ResponseEntity.ok(productoService.buscarPorFechasYCiudad(checkIn, checkOut, id));
        }
    
    @GetMapping("/{id}")
    public  ResponseEntity<Producto> buscarProducto(@PathVariable Long id) {
        Optional<Producto> productoBuscado = productoService.buscarProducto(id);
        if (productoBuscado.isPresent()) {
            return ResponseEntity.ok(productoBuscado.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/ciudad/{id}")
    public ResponseEntity<List<Producto>> buscarProductoPorCiudad(@PathVariable Long id){
        Optional<Ciudad> ciudadBuscada=ciudadService.buscarCiudad(id);
        if (ciudadBuscada.isPresent()){
            List<Producto> productoBuscado= productoService.buscarPorCiudad(ciudadBuscada);
            if (!productoBuscado.isEmpty()){
                return ResponseEntity.ok(productoBuscado);
            }
            else{
                return ResponseEntity.notFound().build();
            }
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Producto> registrarProducto(@RequestBody Producto producto){
        return  ResponseEntity.ok(productoService.guardarProducto(producto));
    }

    @PutMapping
    public ResponseEntity<String> actualizarProducto(@RequestBody Producto producto) {
        // verificamos que la Producto existe
        Optional<Producto> productoBuscada=productoService.buscarProducto(producto.getId());
        if (productoBuscada.isPresent()) {
            productoService.actualizarProducto(producto);
            return ResponseEntity.ok("Se actualizó el Producto con id= " + producto.getId());
        } else {
            return ResponseEntity.badRequest().body("No se pudo actualizar el Producto con id= " + producto.getId() +
                    " ya que no existe en la base de datos.");
        }
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<String> eliminarProducto(@PathVariable Long id) {

        Optional<Producto> productoBuscado = productoService.buscarProducto(id);
        if (productoBuscado.isPresent()) {
            productoService.eliminarProducto(id);
            return ResponseEntity.ok("Se eliminó el producto con id = " + id);
        } else {
            return ResponseEntity.badRequest().body("No se puede eliminar el producto con id =" + id +
                    "ya que no existe en la base de datos. ");
        }
    }

   /* @GetMapping("/categoria/{categoriaId}")
    public ResponseEntity<List<?>> categoriaBuscada(@PathVariable Long categoriaId) {
        return ResponseEntity.ok(productoService.buscarCategoria(categoriaId));
    }
*/
}
