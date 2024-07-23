package com.s16_16_t_java_react.backend.service;

import com.s16_16_t_java_react.backend.entities.Categoria;

import java.util.List;
import java.util.Optional;

public interface ICategoriaService {
    Categoria saveCategoria(Categoria categoria);
    Optional<Categoria> getCategoriaById(int id);
}
