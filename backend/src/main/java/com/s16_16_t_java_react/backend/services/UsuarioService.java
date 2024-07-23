package com.s16_16_t_java_react.backend.services;

import com.s16_16_t_java_react.backend.dtos.UsuarioDto;

public interface UsuarioService {
    public UsuarioDto findById(Integer id);
}
