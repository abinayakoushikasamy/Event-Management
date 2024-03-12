package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.sample.entity.Invitation;


public interface InvitationRepository extends JpaRepository<Invitation, Long> {

}
 