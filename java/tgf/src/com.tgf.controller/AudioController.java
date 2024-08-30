
package com.tgf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.yourpackage.model.Audio;
import com.yourpackage.service.AudioService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/audio")
public class AudioController {

    @Autowired
    private AudioService audioService;

    @PostMapping("/upload")
    public Audio uploadAudio(@RequestParam("file") MultipartFile file) throws IOException {
        return audioService.saveAudio(file);
    }

    @GetMapping
    public List<Audio> getAllAudios() {
        return audioService.getAllAudios();
    }

    @GetMapping("/{id}")
    public Audio getAudioById(@PathVariable Long id) {
        return audioService.getAudioById(id);
    }
}
