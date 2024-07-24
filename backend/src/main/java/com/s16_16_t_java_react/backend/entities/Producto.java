package com.s16_16_t_java_react.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "Productos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto {
    @Id
    @Column(name="producto_id", unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nombre;
    private String descripcion;
    private Double precio;
    private int stock;
    @OneToOne
    private Categoria categoria;
    private List<String> imagesName;
}
