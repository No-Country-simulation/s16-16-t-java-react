package com.s16_16_t_java_react.backend.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.s16_16_t_java_react.backend.dto.DetallePedidoDto;

import com.s16_16_t_java_react.backend.entities.DetallePedido;

@Mapper(componentModel = "spring")
public interface DetallePedidoMapper {
    
    DetallePedido toDetallePedido (DetallePedidoDto detallePedidoDto);

    DetallePedidoDto toDetallePedidoDto(DetallePedido detallePedido);

    List<DetallePedidoDto> toDetallePedidoDto(List<DetallePedido> detallePedido); 

   // List<DetallePedido> toDetallePedido(List<DetallePedidoDto> detallePedidoDto); 

    void updateDetallePedido (@MappingTarget DetallePedido detallePedido, DetallePedidoDto detallePedidoDto);

}
