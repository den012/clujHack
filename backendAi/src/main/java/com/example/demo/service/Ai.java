package com.example.demo.service;

import org.springframework.ai.client.AiClient;
import org.springframework.ai.prompt.Prompt;
import org.springframework.ai.prompt.messages.ChatMessage;
import org.springframework.ai.prompt.messages.Message;
import org.springframework.ai.prompt.messages.MessageType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Ai {

    @Autowired
    private AiClient aiClient;


    public String response(String message) {
        List<Message> msgs = new ArrayList<>();
        msgs.add(new ChatMessage(MessageType.USER, message));
        var resps = aiClient.generate(new Prompt(msgs));
        return resps.getGenerations().get(0).getText();
    }

}
