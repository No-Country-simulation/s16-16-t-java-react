package com.s16_16_t_java_react.backend.controller;

import com.s16_16_t_java_react.backend.entities.Imagen;
import com.s16_16_t_java_react.backend.service.IImagenService;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@AllArgsConstructor
@CrossOrigin("*")
@RestController
@RequestMapping("/imagenes")
public class ImagenController {

    private IImagenService service;

    @PostMapping
    public Imagen saveImagen(@RequestPart MultipartFile file) throws IOException {
        return service.saveImage(new Imagen(file.getBytes(), file.getContentType()));
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getImagenById(@PathVariable int id){
        Optional<Imagen> imagen = service.getImagenById(id);
        if (imagen.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(imagen.get());
    }

}
