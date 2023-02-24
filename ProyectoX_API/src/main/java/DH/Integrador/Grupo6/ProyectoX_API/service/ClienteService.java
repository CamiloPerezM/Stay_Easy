package DH.Integrador.Grupo6.ProyectoX_API.service;

import DH.Integrador.Grupo6.ProyectoX_API.entity.Cliente;
import DH.Integrador.Grupo6.ProyectoX_API.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> Cliente(){
        return clienteRepository.findAll();
    }

    public Optional<Cliente> buscarCliente(Long id){
        return clienteRepository.findById(id);
    }

    // post

    public Cliente guardarCliente(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    // put

    public void actualizarCliente(Cliente cliente){
        clienteRepository.save(cliente);
    }

    // delete

    public void eliminarCliente(Long id){clienteRepository.deleteById(id);}



}
