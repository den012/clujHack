package com.example.demo.controller;

import com.example.demo.service.Ai;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ai")
@RequiredArgsConstructor
public class api {
    private final Ai ai;

    @PostMapping("/message")
    public ResponseEntity<String>message(@RequestBody String message){
        return ResponseEntity.ok(ai.response(message));
    }

}
