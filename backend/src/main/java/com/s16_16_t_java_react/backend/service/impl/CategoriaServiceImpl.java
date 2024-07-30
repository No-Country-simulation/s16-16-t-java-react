package com.s16_16_t_java_react.backend.service.impl;

import java.util.List;


import org.springframework.stereotype.Service;

import com.s16_16_t_java_react.backend.dto.CategoriaDto;
import com.s16_16_t_java_react.backend.entities.Categoria;
import com.s16_16_t_java_react.backend.mappers.CategoriaMapper;
import com.s16_16_t_java_react.backend.repository.CategoriaRepository;
import com.s16_16_t_java_react.backend.service.CategoriaService;
@Service
public class CategoriaServiceImpl implements CategoriaService {
    
    private final CategoriaRepository categoriaRepository;
    private final CategoriaMapper categoriaMapper;

    public CategoriaServiceImpl (CategoriaRepository categoriaRepository, CategoriaMapper categoriaMapper){
        this.categoriaRepository = categoriaRepository;
        this.categoriaMapper = categoriaMapper;
        
    }

    @Override
    public List<CategoriaDto> findAll() {
        
        return categoriaMapper.toCategoriaDto(categoriaRepository.findAll());
    }

    @Override
    public CategoriaDto save(CategoriaDto categoriaDto) {

        Categoria categoria = categoriaMapper.toCategoria(categoriaDto);

        return categoriaMapper.toCategoriaDto(categoriaRepository.save(categoria));        
    }

    @Override
    public CategoriaDto findById(Integer id) {

        Categoria categoria = categoriaRepository.findById(id).orElseThrow();

        return categoriaMapper.toCategoriaDto(categoria);
        
    }

    @Override
    public CategoriaDto update(Integer id, CategoriaDto categoriaDto) {
        
        Categoria categoria = categoriaRepository.findById(id).orElseThrow();
        categoriaMapper.updateCategoria(categoria, categoriaDto);        
        return categoriaMapper.toCategoriaDto(categoriaRepository.save(categoria));
        
    }

    @Override
    public CategoriaDto delete(Integer id) {
        Categoria categoria = categoriaRepository.findById(id).orElseThrow();
        
        CategoriaDto categoriaDto = categoriaMapper.toCategoriaDto(categoria);

        categoriaRepository.deleteById(id);

        return categoriaDto;
    }
    
}
