package com.sample.controller;

import com.sample.entity.Invitation;
import com.sample.service.InvitationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/invitations")
public class InvitationController {

    @Autowired
    private InvitationService invitationService;

    @PostMapping("/adds")
    public String addInvitation(@RequestBody Invitation invitation) {
        return invitationService.saveInvitation(invitation);
    }

    @PutMapping("/update")
    public String updateInvitation(@RequestBody Invitation invitation) {
        return invitationService.updateInvitation(invitation);
    }

    @GetMapping("/get")
    public List<Invitation> getInvitations() {
        return invitationService.getInvitations();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteInvitation(@PathVariable Long id) {
        return invitationService.deleteInvitation(id);
    }
}

