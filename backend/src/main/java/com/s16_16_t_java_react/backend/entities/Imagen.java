package com.s16_16_t_java_react.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Imagenes")
public class Imagen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public Imagen(byte[] data, String type) {
        this.data = data;
        this.type = type;
    }

    @Column(columnDefinition="LONGBLOB NOT NULL")
    private byte[] data;

    private String type;

}