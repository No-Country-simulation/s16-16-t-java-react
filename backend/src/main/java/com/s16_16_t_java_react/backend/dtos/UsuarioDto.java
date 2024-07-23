package com.s16_16_t_java_react.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class UsuarioDto {
    private int id;
    private String email;
    private String telefono;
    private String password;
}
