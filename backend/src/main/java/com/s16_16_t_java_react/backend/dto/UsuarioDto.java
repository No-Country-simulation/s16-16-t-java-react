package com.s16_16_t_java_react.backend.dto;


import lombok.Data;


@Data

public class UsuarioDto {
    private int id;
    private String email;
    private String telefono;
    private String password;
}
