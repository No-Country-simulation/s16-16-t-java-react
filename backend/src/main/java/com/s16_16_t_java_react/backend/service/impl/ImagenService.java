package com.s16_16_t_java_react.backend.service.impl;

import com.s16_16_t_java_react.backend.entities.Imagen;
import com.s16_16_t_java_react.backend.repository.ImagenRepository;
import com.s16_16_t_java_react.backend.service.IImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImagenService implements IImagenService {
    @Autowired
    private ImagenRepository repository;

    @Override
    public Imagen saveImage(Imagen imagen) {
        return repository.save(imagen);
    }

    @Override
    public Optional<Imagen> getImagenById(int id) {
        return repository.findById(id);
    }
}
