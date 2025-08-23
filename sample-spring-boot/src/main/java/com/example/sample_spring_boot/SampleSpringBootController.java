package com.example.sample_spring_boot;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class SampleSpringBootController {
 @GetMapping("/display")
 public String display()
 {
    return "This is the first spring project";
 }   
}
