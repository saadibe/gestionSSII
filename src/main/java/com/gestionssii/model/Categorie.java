package com.gestionssii.model;
// Generated 27 avr. 2017 17:45:17 by Hibernate Tools 4.3.1.Final

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Categorie generated by hbm2java
 */
@Entity
@Table(name = "categorie", catalog = "gestion_ssii")
@Proxy(lazy = false)
public class Categorie implements java.io.Serializable {

	private Integer idCategorie;
	private String description;
	private Set<Question> questions = new HashSet<Question>(0);

	public Categorie() {
	}
	
	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "idCategorie", unique = true, nullable = false)
	public Integer getIdCategorie() {
		return this.idCategorie;
	}

	public void setIdCategorie(Integer idCategorie) {
		this.idCategorie = idCategorie;
	}

	@Column(name = "description", length = 80)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "categorie")
	public Set<Question> getQuestions() {
		return this.questions;
	}

	public void setQuestions(Set<Question> questions) {
		this.questions = questions;
	}

}
