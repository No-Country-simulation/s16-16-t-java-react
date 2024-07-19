package com.s16_16_t_java_react.backend.controller;

import com.s16_16_t_java_react.backend.entities.Producto;
import com.s16_16_t_java_react.backend.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private IProductoService service;

    @GetMapping
    public List<Producto> getAll(){
        return service.getAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Producto> getProductoById(@PathVariable int id){
        Optional<Producto> producto = service.getProductoById(id);
        if (producto.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(producto.get());
    }

}
