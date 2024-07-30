package com.s16_16_t_java_react.backend.dto;


import lombok.Data;


@Data
public class ProductoDto {
    private String nombre;
    private String descripcion;
    private Double precio;
    private int stock;
    private int categoria_id;
}
