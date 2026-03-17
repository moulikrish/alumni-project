package com.example.alumni_portal.model;

import jakarta.persistence.*;

@Entity
@Table(name="students")

public class Student {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String name;

 private String email;

 private String department;
 
 private String year;
 
 private String skills;

 public Student(){}

 public Student(String name,String email,String department){
  this.name=name;
  this.email=email;
  this.department=department;
 }
 
 public void setId(Long id){
  this.id=id;
 }

 public Long getId(){
  return id;
 }

 public String getName(){
  return name;
 }

 public void setName(String name){
  this.name=name;
 }

 public String getEmail(){
  return email;
 }

 public void setEmail(String email){
  this.email=email;
 }

 public String getDepartment(){
  return department;
 }

 public void setDepartment(String department){
  this.department=department;
 }
 
 public String getYear() {
  return year;
 }
 
 public void setYear(String year) {
  this.year = year;
 }
 
 public String getSkills() {
  return skills;
 }
 
 public void setSkills(String skills) {
  this.skills = skills;
 }
 
 

}
