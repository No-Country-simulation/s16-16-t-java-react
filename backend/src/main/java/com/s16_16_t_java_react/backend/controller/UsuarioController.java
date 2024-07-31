package com.s16_16_t_java_react.backend.controller;



import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.s16_16_t_java_react.backend.dto.UsuarioDto;
import com.s16_16_t_java_react.backend.service.UsuarioService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping("/usuario/{id}")
    public ResponseEntity<UsuarioDto> getUsuarioById(@RequestParam Integer id) {
        return ResponseEntity.ok(usuarioService.findById(id));
    } 

    


}
