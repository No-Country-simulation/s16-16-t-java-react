package com.s16_16_t_java_react.backend.service;

import java.util.List;

import com.s16_16_t_java_react.backend.dto.CategoriaDto;

public interface CategoriaService {

    List<CategoriaDto> findAll();

    CategoriaDto save(CategoriaDto categoriasDto);

    CategoriaDto findById(Integer id);

    CategoriaDto update(Integer idCategoria, CategoriaDto categoriasDto);

    CategoriaDto delete(Integer idCategoria);
}
