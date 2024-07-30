package com.s16_16_t_java_react.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "DetallePedidos")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DetallePedido implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;   
@Column(name = "producto_id")
    private int producto_id;
@Column(name = "pedido_id")
    private int pedido_id;
    private int cantidad;
    private BigDecimal precio;

    @ManyToOne
    @JoinColumn(name = "pedido_id",insertable=false, updatable=false)
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "producto_id",insertable=false, updatable=false)
    private Producto producto;
}
