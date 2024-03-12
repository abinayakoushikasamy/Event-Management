package com.sample.service;

import com.sample.entity.Invitation;
import com.sample.repository.InvitationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InvitationService {

    @Autowired
    private InvitationRepository invitationRepository;

    public String saveInvitation(Invitation invitation) {
        invitationRepository.save(invitation);
        return "Invitation added successfully!";
    }

    public String updateInvitation(Invitation invitation) {
        if (invitationRepository.existsById(invitation.getId())) {
            invitationRepository.save(invitation);
            return "Invitation updated successfully!";
        } else {
            return "Invitation not found.";
        }
    }

    public List<Invitation> getInvitations() {
        return invitationRepository.findAll();
    }

    public String deleteInvitation(Long id) {
        Optional<Invitation> existingInvitation = invitationRepository.findById(id);
        if (existingInvitation.isPresent()) {
            invitationRepository.deleteById(id);
            return "Invitation deleted successfully!";
        } else {
            return "Invitation not found.";
        }
    }
}
