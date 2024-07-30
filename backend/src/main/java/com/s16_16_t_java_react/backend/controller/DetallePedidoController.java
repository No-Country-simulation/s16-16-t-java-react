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


import com.s16_16_t_java_react.backend.dto.DetallePedidoDto;
import com.s16_16_t_java_react.backend.service.DetallePedidoService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class DetallePedidoController {

    private final DetallePedidoService detallePedidoService;

    public DetallePedidoController(DetallePedidoService detallePedidoService) {
        this.detallePedidoService = detallePedidoService;
    }
    
    @GetMapping ("/detallePedido")
    public ResponseEntity<List<DetallePedidoDto>> get()  {
        return ResponseEntity.ok(detallePedidoService.findAll());
    }

    @PostMapping("/detallePedido")
    public ResponseEntity<DetallePedidoDto> save(@PathVariable Integer idPedido, @RequestBody DetallePedidoDto detallePedidoDto){
              
        return new ResponseEntity<>(detallePedidoService.save(idPedido, detallePedidoDto), HttpStatus.CREATED);
    }

    @PutMapping("/detallePedido/{idDetallePedido}")
    public ResponseEntity<DetallePedidoDto> update(@PathVariable Integer idDetallePedido, @RequestBody DetallePedidoDto detallePedidoDto){
        return new ResponseEntity<>(detallePedidoService.update(idDetallePedido, detallePedidoDto), HttpStatus.OK);
    }

    @DeleteMapping("/detallePedido/{id}")
    public ResponseEntity<DetallePedidoDto> delete(@PathVariable Integer id){
        return ResponseEntity.ok(detallePedidoService.delete(id));

    }

    @GetMapping("/detallePedido/{id}")
    public ResponseEntity<DetallePedidoDto> getCategoriaById(@RequestParam Integer id){
        return ResponseEntity.ok(detallePedidoService.findById(id));
    }
}
