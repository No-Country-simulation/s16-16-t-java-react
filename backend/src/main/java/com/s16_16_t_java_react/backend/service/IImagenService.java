package com.s16_16_t_java_react.backend.service;

import com.s16_16_t_java_react.backend.entities.Imagen;

import java.util.Optional;

public interface IImagenService {
    Imagen saveImage(Imagen imagen);
    Optional<Imagen> getImagenById(int id);
}
