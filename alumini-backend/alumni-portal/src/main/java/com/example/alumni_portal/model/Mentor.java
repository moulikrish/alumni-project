package com.example.alumni_portal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Mentor {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String alumniName;
 private String expertise;
 private String availability;
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
 public String getExpertise() {
	return expertise;
 }
 public void setExpertise(String expertise) {
	this.expertise = expertise;
 }
 public String getAvailability() {
	return availability;
 }
 public void setAvailability(String availability) {
	this.availability = availability;
 }
 public Mentor(Long id, String alumniName, String expertise, String availability) {
	super();
	this.id = id;
	this.alumniName = alumniName;
	this.expertise = expertise;
	this.availability = availability;
 }
 public Mentor() {
	super();
 }
 
 

}