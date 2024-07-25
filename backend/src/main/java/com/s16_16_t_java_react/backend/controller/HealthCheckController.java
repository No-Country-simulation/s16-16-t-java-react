package com.s16_16_t_java_react.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheckController {
    @GetMapping("/")
    public ResponseEntity<String> healthCheck() {
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }
}

