package com.s16_16_t_java_react.backend.service;

import com.s16_16_t_java_react.backend.entities.Pedido;

import java.util.Optional;

public interface IPedidoService {
    Optional<Pedido> getPedidoById(int idPedido);
    public Pedido savePedido(Pedido pedido);
    public void deletePedido(int idPedido);

}
