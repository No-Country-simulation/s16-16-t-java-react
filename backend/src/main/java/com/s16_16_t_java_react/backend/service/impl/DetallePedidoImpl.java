package com.s16_16_t_java_react.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.s16_16_t_java_react.backend.dto.DetallePedidoDto;

import com.s16_16_t_java_react.backend.entities.DetallePedido;
import com.s16_16_t_java_react.backend.entities.Pedido;

import com.s16_16_t_java_react.backend.mappers.DetallePedidoMapper;
import com.s16_16_t_java_react.backend.repository.DetallePedidoRepository;
import com.s16_16_t_java_react.backend.repository.PedidoRepository;

import com.s16_16_t_java_react.backend.service.DetallePedidoService;

@Service
public class DetallePedidoImpl implements DetallePedidoService{

    private final DetallePedidoMapper detallePedidoMapper;
    private final DetallePedidoRepository detallePedidoRepository;    
    private final PedidoRepository pedidoRepository;

    
    public DetallePedidoImpl(PedidoRepository pedidoRepository, DetallePedidoMapper detallePedidoMapper, DetallePedidoRepository detallePedidoRepository) {
        this.detallePedidoMapper = detallePedidoMapper;
        this.detallePedidoRepository = detallePedidoRepository;        
        this.pedidoRepository = pedidoRepository;
    }


    @Override
    public List<DetallePedidoDto> findAll() {
        return detallePedidoMapper.toDetallePedidoDto(detallePedidoRepository.findAll());
    }


    @Override
    public DetallePedidoDto save(Integer idPedido, DetallePedidoDto detallePedidoDto) {
        
        Pedido pedido = pedidoRepository.findById(idPedido).orElseThrow();

        DetallePedido detallePedido = detallePedidoMapper.toDetallePedido(detallePedidoDto);
        detallePedido.setId(pedido.getId());

        return detallePedidoMapper.toDetallePedidoDto(detallePedidoRepository.save(detallePedido));
        

      

        

    }


    @Override
    public DetallePedidoDto findById(Integer id) {
        DetallePedido detallePedido = detallePedidoRepository.findById(id).orElseThrow();
        return detallePedidoMapper.toDetallePedidoDto(detallePedido);
    }


    @Override
    public DetallePedidoDto update(Integer idDetallePedido, DetallePedidoDto detallePedidoDto) {
        DetallePedido detallePedido = detallePedidoRepository.findById(idDetallePedido).orElseThrow();
        detallePedidoMapper.updateDetallePedido(detallePedido, detallePedidoDto);
        return detallePedidoMapper.toDetallePedidoDto(detallePedidoRepository.save(detallePedido));
    }


    @Override
    public DetallePedidoDto delete(Integer idDetallePedido) {
        
        DetallePedido detallePedido = detallePedidoRepository.findById(idDetallePedido).orElseThrow();
        DetallePedidoDto detallePedidoDto = detallePedidoMapper.toDetallePedidoDto(detallePedido);

        detallePedidoRepository.delete(detallePedido);

        return detallePedidoDto;

    }
    
}
