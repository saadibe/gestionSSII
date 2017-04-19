package com.gestionssii.DTO;

public class ExamsDTO {
	
	private int idExams;
	private String name;
	private String expertise;
	private String level;
	private int time;
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
