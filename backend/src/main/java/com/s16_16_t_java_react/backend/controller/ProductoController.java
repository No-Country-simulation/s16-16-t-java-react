package com.s16_16_t_java_react.backend.controller;

import com.s16_16_t_java_react.backend.dto.CategoriaDto;
import com.s16_16_t_java_react.backend.dto.ProductoDto;
import com.s16_16_t_java_react.backend.entities.Categoria;
import com.s16_16_t_java_react.backend.entities.Imagen;
import com.s16_16_t_java_react.backend.entities.Producto;
import com.s16_16_t_java_react.backend.service.IImagenService;
import com.s16_16_t_java_react.backend.service.IProductoService;
import com.s16_16_t_java_react.backend.service.impl.CategoriaServiceImpl;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin("*")
@RestController
@RequestMapping("/productos")
public class ProductoController {


    private IProductoService service;

    private IImagenService imagenService;

    private CategoriaServiceImpl categoriaService;

    public ProductoController(IProductoService service, IImagenService imagenService, CategoriaServiceImpl categoriaService) {
        this.service = service;
        this.imagenService = imagenService;
        this.categoriaService = categoriaService;
    }

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
                                 @RequestPart MultipartFile file) throws IOException {


        int categoria_id = producto.getCategoria_id();
        CategoriaDto optionalCategoria = categoriaService.findById(categoria_id); // fix
        if (optionalCategoria == null) return ResponseEntity.badRequest().body("La categoria " + categoria_id + "no fue encontrada");
        Categoria categoria = new Categoria(optionalCategoria.getId(),optionalCategoria.getNombre());


        Imagen imagen = imagenService
                .saveImage(new Imagen(file.getBytes(), file.getContentType()));
        Set<Imagen> imagenSet = new HashSet<>();
        imagenSet.add(imagen);


        Producto p =  Producto.builder()
                .nombre(producto.getNombre())
                .descripcion(producto.getDescripcion())
                .stock(producto.getStock())
                .precio(producto.getPrecio())
                .categoria(categoria)
                .imagenes(imagenSet)
                .build();


        return ResponseEntity.ok(service.saveProducto(p));
    }

}
