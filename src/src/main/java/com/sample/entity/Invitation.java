package com.sample.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Invitation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title ;
    private String description;
    private String date;
    private String time;
    private String venue;

    
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title= title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description= description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
    public String getTime() {
        return time;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }
    public String getVenue() {
        return venue;
    }

    public void setTime(String time) {
        this.time = time;
    }
    
     
} 
