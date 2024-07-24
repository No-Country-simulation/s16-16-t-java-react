package com.s16_16_t_java_react.backend.service.impl;

import com.s16_16_t_java_react.backend.entities.Pedido;
import com.s16_16_t_java_react.backend.repository.PedidoRepository;
import com.s16_16_t_java_react.backend.service.IPedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class PedidoService implements IPedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Override
    public Optional<Pedido> getPedidoById(int idPedido) {
        return pedidoRepository.findById(idPedido);
    }

    @Override
    public Pedido savePedido(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deletePedido(int idPedido) throws NoSuchElementException {
        Optional<Pedido> pedidoEliminado = pedidoRepository.findById(idPedido);

        if (pedidoEliminado.isPresent()) {
            Pedido pedido = pedidoEliminado.get();
            pedidoRepository.delete(pedido);
        } else {
            throw new NoSuchElementException("Pedido no encontrado con id: " + idPedido);
        }
    }
}
