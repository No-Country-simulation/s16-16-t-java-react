package com.s16_16_t_java_react.backend.service;

import com.s16_16_t_java_react.backend.dto.ProductoDto;
import com.s16_16_t_java_react.backend.entities.Producto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface IProductoService {
    List<Producto> getAll();

    Optional<Producto> getProductoById(int id);
    Producto saveProducto(Producto producto);
    Producto saveProducto(ProductoDto productoDto, MultipartFile image) throws Exception;
}
