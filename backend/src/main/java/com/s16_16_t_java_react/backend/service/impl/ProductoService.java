package com.s16_16_t_java_react.backend.service.impl;

import com.s16_16_t_java_react.backend.entities.Producto;
import com.s16_16_t_java_react.backend.repository.ProductoRepository;
import com.s16_16_t_java_react.backend.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService implements IProductoService {

    @Autowired
    private ProductoRepository repository;

    @Override
    public List<Producto> getAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Producto> getProductoById(int id) {
        return repository.findById(id);
    }

}
