package com.s16_16_t_java_react.backend.service.impl;

import org.springframework.stereotype.Service;

import com.s16_16_t_java_react.backend.dto.UsuarioDto;
import com.s16_16_t_java_react.backend.entities.Usuario;
import com.s16_16_t_java_react.backend.mappers.UsuarioMapper;
import com.s16_16_t_java_react.backend.repository.UsuarioRepository;
import com.s16_16_t_java_react.backend.service.UsuarioService;

import jakarta.transaction.Transactional;

@Service
public class UsuarioServiceImpl implements UsuarioService{
    private final UsuarioRepository usuarioRepository;
    private final UsuarioMapper usuarioMapper;

    public UsuarioServiceImpl (UsuarioRepository usuariosRepository, UsuarioMapper usuariosMapper){
        this.usuarioRepository = usuariosRepository;
        this.usuarioMapper = usuariosMapper;
    }

    @Transactional
    @Override
    public UsuarioDto findById(Integer id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow();
        return usuarioMapper.toUsuariosDto(usuario);
    }
    
}
