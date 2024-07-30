package com.s16_16_t_java_react.backend.dto;


import java.io.Serializable;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;


@Data
@ToString
@Builder
public class DetallePedidoDto implements Serializable {
    private int id;
    private int pedido_id;
    private int producto_id;
    private int cantidad;
    private double precio;
}
