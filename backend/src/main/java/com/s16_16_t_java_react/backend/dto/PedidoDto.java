package com.s16_16_t_java_react.backend.dto;

import java.math.BigDecimal;
import java.util.Date;

import lombok.Data;

@Data
public class PedidoDto {
    private int id;  
    private Date fecha;
    private int usuario_id;
    private BigDecimal total;
}
