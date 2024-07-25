package com.s16_16_t_java_react.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.s16_16_t_java_react.backend.dto.CategoriaDto;
import com.s16_16_t_java_react.backend.service.CategoriaService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class CategoriaController {

    private final CategoriaService categoriaService;

    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }
    
    @GetMapping("/categoria")
    public ResponseEntity<List<CategoriaDto>> get() {
        return ResponseEntity.ok(categoriaService.findAll());
    }

    @PostMapping("/categoria")
    public ResponseEntity<CategoriaDto> save(@RequestBody CategoriaDto categoriaDto){

        return new ResponseEntity<>(categoriaService.save(categoriaDto),HttpStatus.CREATED);
    }

    @PutMapping("/categoria/{idCategoria}")
    public ResponseEntity<CategoriaDto> update(@PathVariable Integer idCategoria, @RequestBody CategoriaDto categoriaDto){
        return new ResponseEntity<>(categoriaService.update(idCategoria, categoriaDto), HttpStatus.OK);
    }

    @DeleteMapping("/categoria/{id}")
    public ResponseEntity<CategoriaDto> delete(@PathVariable Integer id){
        return ResponseEntity.ok(categoriaService.delete(id));

    }

    @GetMapping("/categoria/{id}")
    public ResponseEntity<CategoriaDto> getCategoriaById(@RequestParam Integer idCategoria){
        return ResponseEntity.ok(categoriaService.findById(idCategoria));
    }
}
