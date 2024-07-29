package com.s16_16_t_java_react.backend.service.impl;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.s16_16_t_java_react.backend.dto.PedidoDto;
import com.s16_16_t_java_react.backend.entities.Pedido;
import com.s16_16_t_java_react.backend.mappers.PedidoMapper;
import com.s16_16_t_java_react.backend.repository.PedidoRepository;
import com.s16_16_t_java_react.backend.service.PedidoService;

import org.springframework.transaction.annotation.Transactional;

@Service
public class PedidoServiceImpl implements PedidoService {
    private final PedidoRepository pedidoRepository;
    private final PedidoMapper pedidoMapper;

    public PedidoServiceImpl(PedidoRepository pedidoRepository, PedidoMapper pedidoMapper) {
        this.pedidoRepository = pedidoRepository;
        this.pedidoMapper = pedidoMapper;
    }

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

    @Override
    public PedidoDto updatePedido(Integer id, PedidoDto pedidoDto) {
        Pedido pedido = pedidoRepository.findById(id).orElseThrow();

        pedidoMapper.updatePedido(pedidoDto, pedido);

        return pedidoMapper.toPedidoDto(pedidoRepository.save(pedido));
    }



    
}
