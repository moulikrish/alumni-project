package com.example.alumni_portal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Donation {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String alumniName;
 private Double amount;
 private String message;
 public Long getId() {
	return id;
 }
 public void setId(Long id) {
	this.id = id;
 }
 public String getAlumniName() {
	return alumniName;
 }
 public void setAlumniName(String alumniName) {
	this.alumniName = alumniName;
 }
 public Double getAmount() {
	return amount;
 }
 public void setAmount(Double amount) {
	this.amount = amount;
 }
 public String getMessage() {
	return message;
 }
 public void setMessage(String message) {
	this.message = message;
 }
 public Donation(Long id, String alumniName, Double amount, String message) {
	super();
	this.id = id;
	this.alumniName = alumniName;
	this.amount = amount;
	this.message = message;
 }
 public Donation() {
	super();
 }

 
}