import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/upload")
public class FileUploadController {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @PostMapping("/audio")
    public String uploadAudio(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) {
        return uploadFile(file, "audio", redirectAttributes);
    }

    @PostMapping("/video")
    public String uploadVideo(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) {
        return uploadFile(file, "video", redirectAttributes);
    }

    private String uploadFile(MultipartFile file, String type, RedirectAttributes redirectAttributes) {
        if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
            return "redirect:uploadStatus";
        }

        try {
            // Save the file to the specified directory
            String filePath = uploadDir + "/" + type + "/" + file.getOriginalFilename();
            File dest = new File(filePath);
            dest.getParentFile().mkdirs();
            file.transferTo(dest);

            redirectAttributes.addFlashAttribute("message", "You successfully uploaded '" + file.getOriginalFilename() + "'");

        } catch (IOException e) {
            e.printStackTrace();
        }

        return "redirect:/uploadStatus";
    }
}
