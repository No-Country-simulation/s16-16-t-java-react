package com.s16_16_t_java_react.backend.service.impl;

import com.s16_16_t_java_react.backend.dto.CategoriaDto;
import com.s16_16_t_java_react.backend.dto.ProductoDto;
import com.s16_16_t_java_react.backend.entities.Categoria;
import com.s16_16_t_java_react.backend.entities.Imagen;
import com.s16_16_t_java_react.backend.entities.Producto;
import com.s16_16_t_java_react.backend.repository.ProductoRepository;
import com.s16_16_t_java_react.backend.service.CategoriaService;
import com.s16_16_t_java_react.backend.service.IImagenService;
import com.s16_16_t_java_react.backend.service.IProductoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@AllArgsConstructor
@Service
public class ProductoService implements IProductoService {

    private ProductoRepository repository;
    private IImagenService imagenService;
    private CategoriaService categoriaService;

    @Override
    public List<Producto> getAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Producto> getProductoById(int id) {
        return repository.findById(id);
    }

    @Override
    public Producto saveProducto(Producto producto) {
        return repository.save(producto);
    }

    @Override
    public Producto saveProducto(ProductoDto productoDto, MultipartFile image) throws Exception {

        CategoriaDto categoriaDto = categoriaService.findById(productoDto.getCategoria_id());
        if (categoriaDto == null) {
            throw new Exception("Categoría no encontrada");
        }

        Categoria categoria = new Categoria(categoriaDto.getId(),categoriaDto.getNombre());

        Imagen imagen = imagenService
                .saveImage(new Imagen(image.getBytes(), image.getContentType()));
        Set<Imagen> imagenSet = new HashSet<>();
        imagenSet.add(imagen);

        Producto p =  Producto.builder()
                .nombre(productoDto.getNombre())
                .descripcion(productoDto.getDescripcion())
                .stock(productoDto.getStock())
                .precio(productoDto.getPrecio())
                .categoria(categoria)
                .imagenes(imagenSet)
                .build();

        return repository.save(p);
    }

}
