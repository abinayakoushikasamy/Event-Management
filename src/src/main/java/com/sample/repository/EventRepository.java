package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.entity.Event;


public interface EventRepository extends JpaRepository<Event, Long> {

}
 