package com.gestionssii.DTO;
// Generated 27 avr. 2017 17:45:17 by Hibernate Tools 4.3.1.Final

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class QuestionDTO {

	private Integer idQuestion;
	private CategorieDTO categorie;
	private ExamsDTO exams;
	private String description;
	private List<ReponseDTO> reponses = new ArrayList<ReponseDTO>();

	public QuestionDTO() {
	}

	public Integer getIdQuestion() {
		return this.idQuestion;
	}

	public void setIdQuestion(Integer idQuestion) {
		this.idQuestion = idQuestion;
	}

	public ExamsDTO getExams() {
		return this.exams;
	}

	public void setExams(ExamsDTO exams) {
		this.exams = exams;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<ReponseDTO> getReponses() {
		return this.reponses;
	}

	public void setReponses(List<ReponseDTO> reponses) {
		this.reponses = reponses;
	}

	public CategorieDTO getCategorie() {
		return categorie;
	}

	public void setCategorie(CategorieDTO categorie) {
		this.categorie = categorie;
	}

}
