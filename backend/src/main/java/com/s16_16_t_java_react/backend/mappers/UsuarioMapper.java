package com.s16_16_t_java_react.backend.mappers;


import org.mapstruct.Mapper;

import com.s16_16_t_java_react.backend.dto.UsuarioDto;
import com.s16_16_t_java_react.backend.entities.Usuario;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {
    
    Usuario toUsuarios(UsuarioDto usuariosDto);

    UsuarioDto toUsuariosDto(Usuario usuario);
}
