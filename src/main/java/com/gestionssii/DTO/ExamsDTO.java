package com.gestionssii.DTO;

import java.util.ArrayList;
import java.util.List;

public class ExamsDTO {
	
	private int idExams;
	private String name;
	private String expertise;
	private int level;
	private int time;
	private int active;
	private List<QuestionDTO> questions = new ArrayList<QuestionDTO>();
	
	public int getIdExams() {
		return idExams;
	}
	public String getName() {
		return name;
	}
	public String getExpertise() {
		return expertise;
	}
	public int getLevel() {
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
	public void setLevel(int level) {
		this.level = level;
	}
	public void setTime(int time) {
		this.time = time;
	}
	public void setActive(int active) {
		this.active = active;
	}
	public List<QuestionDTO> getQuestions() {
		return questions;
	}
	public void setQuestions(List<QuestionDTO> questions) {
		this.questions = questions;
	}

}
