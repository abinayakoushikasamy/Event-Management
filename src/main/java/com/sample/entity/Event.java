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
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String age;
    private String eventtype;
    private String date;
    private String foodchoices;
    private String numberofpeople;
    private String decorationtheme;

    // Getter and setter methods

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getEventtype() {
        return eventtype;
    }

    public void setEventtype(String eventtype) {
        this.eventtype = eventtype;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getFoodchoices() {
        return foodchoices;
    }

    public void setFoodchoices(String foodchoices) {
        this.foodchoices = foodchoices;
    }

    public String getNumberofpeople() {
        return numberofpeople;
    }

    public void setNumberofpeople(String numberofpeople) {
        this.numberofpeople = numberofpeople;
    }

    public String getDecorationtheme() {
        return decorationtheme;
    }

    public void setDecorationtheme(String decorationtheme) {
        this.decorationtheme = decorationtheme;
    }
}
