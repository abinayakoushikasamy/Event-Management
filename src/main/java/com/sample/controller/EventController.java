// EventController.java

package com.sample.controller;

import com.sample.entity.Event;
import com.sample.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping("/addss")
    public String addEvent(@RequestBody Event event) {
        return eventService.saveEvent(event);
    }

    @PutMapping("/update")
    public String updateEvent(@RequestBody Event event) {
        return eventService.updateEvent(event);
    }

    @GetMapping("/get")
    public List<Event> getEvents() {
        return eventService.getEvents();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteEvent(@PathVariable Long id) {
        return eventService.deleteEvent(id);
    }
}
