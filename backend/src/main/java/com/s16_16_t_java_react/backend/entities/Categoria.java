package com.s16_16_t_java_react.backend.entities;



import jakarta.persistence.*;


import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Categorias")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(unique = true, nullable = false)
    private String nombre;
    
}
