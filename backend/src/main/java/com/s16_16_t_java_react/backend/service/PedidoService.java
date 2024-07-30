package com.s16_16_t_java_react.backend.service;

import java.util.Optional;

import com.s16_16_t_java_react.backend.dto.PedidoDto;
import com.s16_16_t_java_react.backend.entities.Pedido;

public interface PedidoService {

    Optional<Pedido> getPedidoById(int idPedido);

    public Pedido savePedido(Pedido pedido);

    public void deletePedido(int idPedido);
    
    public PedidoDto updatePedido(Integer id, PedidoDto pedidoDto);
}
