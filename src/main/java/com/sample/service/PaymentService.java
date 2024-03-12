package com.sample.service;

import com.sample.entity.Payment;
import com.sample.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment getPaymentById(Long id) {
        Optional<Payment> optionalPayment = paymentRepository.findById(id);
        return optionalPayment.orElse(null);
    }

    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public Payment updatePayment(Long id, Payment updatedPayment) {
        Optional<Payment> optionalPayment = paymentRepository.findById(id);

        if (optionalPayment.isPresent()) {
            Payment existingPayment = optionalPayment.get();
            existingPayment.setName(updatedPayment.getName());
            existingPayment.setCardNumber(updatedPayment.getCardNumber());
            existingPayment.setExpriydate(updatedPayment.getExpriydate());
            existingPayment.setCVV(updatedPayment.getCVV());
            existingPayment.setAmount(updatedPayment.getAmount());

            return paymentRepository.save(existingPayment);
        } else {
            return null; // Handle not found scenario
        }
    }

    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
}
