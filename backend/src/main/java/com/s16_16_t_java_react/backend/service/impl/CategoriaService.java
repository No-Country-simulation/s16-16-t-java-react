package com.s16_16_t_java_react.backend.service.impl;

import com.s16_16_t_java_react.backend.entities.Categoria;
import com.s16_16_t_java_react.backend.repository.CategoriaRepository;
import com.s16_16_t_java_react.backend.service.ICategoriaService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoriaService implements ICategoriaService {

    private CategoriaRepository repository;

    public CategoriaService(CategoriaRepository repository) {
        this.repository = repository;
    }

    @Override
    public Categoria saveCategoria(Categoria categoria) {
        return repository.save(categoria);
    }

    @Override
    public Optional<Categoria> getCategoriaById(int id) {
        return repository.findById(id);
    }
}
