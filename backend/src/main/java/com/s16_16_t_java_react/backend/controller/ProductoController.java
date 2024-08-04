package com.s16_16_t_java_react.backend.controller;

import com.s16_16_t_java_react.backend.dto.ProductoDto;
import com.s16_16_t_java_react.backend.entities.Producto;
import com.s16_16_t_java_react.backend.service.IProductoService;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@CrossOrigin("*")
@RestController
@RequestMapping("/productos")
public class ProductoController {


    private IProductoService service;

    @GetMapping
    public List<Producto> getAll() {
        return service.getAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Producto> getProductoById(@PathVariable int id) {
        Optional<Producto> producto = service.getProductoById(id);
        if (producto.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(producto.get());
    }

    @PostMapping
    public ResponseEntity<?> saveProducto(@RequestPart ProductoDto producto,
                                 @RequestPart MultipartFile file) throws Exception {
        return ResponseEntity.ok(service.saveProducto(producto, file));
    }
}
