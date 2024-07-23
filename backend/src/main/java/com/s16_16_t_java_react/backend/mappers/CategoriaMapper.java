package com.s16_16_t_java_react.backend.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.s16_16_t_java_react.backend.dtos.CategoriaDto;
import com.s16_16_t_java_react.backend.entities.Categoria;

@Mapper(componentModel = "spring")
public interface CategoriaMapper {

    Categoria toCategoria (CategoriaDto categoriaDto);

    CategoriaDto toCategoriaDto (Categoria categoria);
    
    List<CategoriaDto> toCategoriaDto(List<Categoria> categoria); 
    
    void updateCategoria(@MappingTarget Categoria categoria, CategoriaDto categoriaDto);
}
