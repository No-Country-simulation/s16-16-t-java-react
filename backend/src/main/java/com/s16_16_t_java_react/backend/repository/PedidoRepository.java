package com.s16_16_t_java_react.backend.repository;

import com.s16_16_t_java_react.backend.entities.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Integer> {
}
