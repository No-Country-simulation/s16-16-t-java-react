package com.s16_16_t_java_react.backend.controller;

import com.s16_16_t_java_react.backend.dto.ProductoDTO;
import com.s16_16_t_java_react.backend.entities.Categoria;
import com.s16_16_t_java_react.backend.entities.Imagen;
import com.s16_16_t_java_react.backend.entities.Producto;
import com.s16_16_t_java_react.backend.service.ICategoriaService;
import com.s16_16_t_java_react.backend.service.IImagenService;
import com.s16_16_t_java_react.backend.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private IProductoService service;
    @Autowired
    private IImagenService imagenService;
    @Autowired
    private ICategoriaService categoriaService;

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
    public ResponseEntity<?> saveProducto(@RequestPart ProductoDTO producto,
                                 @RequestPart MultipartFile file) throws IOException {


        int categoria_id = producto.getCategoria_id();
        Optional<Categoria> optionalCategoria = categoriaService.getCategoriaById(categoria_id);
        if (optionalCategoria.isEmpty()) return ResponseEntity.badRequest().body("La categoria " + categoria_id + "no fue encontrada");
        Categoria categoria = optionalCategoria.get();


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
