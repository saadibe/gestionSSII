package com.gestionssii.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "exams")
public class Exams {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idExams;
	@Column
	private String name;
	@Column
	private String expertise;
	@Column
	private String level;
	@Column
	private int time;
	@Column
	private int active;
	
	public int getIdExams() {
		return idExams;
	}
	public String getName() {
		return name;
	}
	public String getExpertise() {
		return expertise;
	}
	public String getLevel() {
		return level;
	}
	public int getTime() {
		return time;
	}
	public int getActive() {
		return active;
	}
	public void setIdExams(int idExams) {
		this.idExams = idExams;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setExpertise(String expertise) {
		this.expertise = expertise;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public void setTime(int time) {
		this.time = time;
	}
	public void setActive(int active) {
		this.active = active;
	}

}
