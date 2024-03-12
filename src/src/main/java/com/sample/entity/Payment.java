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
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String cardnumber;
    private String expirydate;
    private String cvv;
    private String amount;
  

    
    
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
        this.name= name;
    }

    public String getCardNumber() {
        return cardnumber;
    }

    public void setCardNumber(String cardnumber) {
        this.cardnumber= cardnumber;
    }

    public String getExpriydate() {
        return expirydate;
    }

    public void setExpriydate(String expirydate) {
        this.expirydate= expirydate;
    }
    public String getCVV() {
        return cvv;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }
    public String getAmount() {
        return amount;
    }

    public void setCVV(String cvv) {
        this.cvv = cvv;
    }
    
     
} 
