// EventService.java

package com.sample.service;

import com.sample.entity.Event;
import com.sample.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public String saveEvent(Event event) {
        eventRepository.save(event);
        return "Event added successfully";
    }

    public String updateEvent(Event event) {
        Optional<Event> existingEvent = eventRepository.findById(event.getId());
        if (existingEvent.isPresent()) {
            eventRepository.save(event);
            return "Event updated successfully";
        } else {
            return "Event not found";
        }
    }

    public List<Event> getEvents() {
        return eventRepository.findAll();
    }

    public String deleteEvent(Long id) {
        Optional<Event> event = eventRepository.findById(id);
        if (event.isPresent()) {
            eventRepository.deleteById(id);
            return "Event deleted successfully";
        } else {
            return "Event not found";
        }
    }
}
