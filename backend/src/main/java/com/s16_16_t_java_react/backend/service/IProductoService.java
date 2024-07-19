package com.s16_16_t_java_react.backend.service;

import com.s16_16_t_java_react.backend.entities.Producto;

import java.util.List;
import java.util.Optional;

public interface IProductoService {
    List<Producto> getAll();

    Optional<Producto> getProductoById(int id);
}
