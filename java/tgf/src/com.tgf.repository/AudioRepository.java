package com.yourpackage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.yourpackage.model.Audio;

public interface AudioRepository extends JpaRepository<Audio, Long> {
}
