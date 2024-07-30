package com.s16_16_t_java_react.backend.service;

import java.util.List;

import com.s16_16_t_java_react.backend.dto.DetallePedidoDto;



public interface DetallePedidoService {

    List<DetallePedidoDto> findAll();

    DetallePedidoDto save(Integer id, DetallePedidoDto detallePedidoDto);

    DetallePedidoDto findById(Integer id);

    DetallePedidoDto update(Integer id, DetallePedidoDto detallePedidoDto);

    DetallePedidoDto delete(Integer id);
}
