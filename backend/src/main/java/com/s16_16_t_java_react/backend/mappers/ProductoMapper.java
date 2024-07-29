package com.s16_16_t_java_react.backend.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;


import com.s16_16_t_java_react.backend.dto.ProductoDto;

import com.s16_16_t_java_react.backend.entities.Producto;

@Mapper (componentModel = "spring")
public interface ProductoMapper {
    Producto toProducto (ProductoDto productoDto);

    ProductoDto toProductoDto (Producto producto);
    
    List<ProductoDto> toProductoDto(List<Producto> producto); 
    
    List<Producto> toProducto(List<ProductoDto> productoDto); 
    
    void updateProducto(@MappingTarget Producto producto, ProductoDto productoDto);
}
