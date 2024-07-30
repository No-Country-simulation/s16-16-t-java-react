package com.s16_16_t_java_react.backend.mappers;


import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.s16_16_t_java_react.backend.dto.PedidoDto;

import com.s16_16_t_java_react.backend.entities.Pedido;

@Mapper(componentModel = "spring")
public interface PedidoMapper {
    Pedido toPedido (PedidoDto pedidoDto);

    PedidoDto toPedidoDto (Pedido pedido);

    List<PedidoDto> toDetallePedidoDto(List<Pedido> pedido);
    
    void updatePedido (@MappingTarget PedidoDto pedidoDto, Pedido pedido);

}
