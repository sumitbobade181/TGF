package com.yourpackage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.yourpackage.model.Audio;
import com.yourpackage.repository.AudioRepository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class AudioService {

    @Autowired
    private AudioRepository audioRepository;

    private final String uploadDir = "uploads/";

    public Audio saveAudio(MultipartFile file) throws IOException {
        // Save file to upload directory
        Path path = Paths.get(uploadDir + file.getOriginalFilename());
        Files.write(path, file.getBytes());

        // Save audio metadata to database
        Audio audio = new Audio();
        audio.setName(file.getOriginalFilename());
        audio.setUrl(path.toString());
        return audioRepository.save(audio);
    }

    public List<Audio> getAllAudios() {
        return audioRepository.findAll();
    }

    public Audio getAudioById(Long id) {
        return audioRepository.findById(id).orElse(null);
    }
}
